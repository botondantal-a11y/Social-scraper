import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/session';
import { startBackgroundScraping } from './processor';

export async function POST(req: Request) {
  try {
    const user = await getSessionUser();
    const { url } = await req.json();
    if (!url) throw new Error("URL megadása kötelező.");

    // Create a new job in the database
    const job = await prisma.scrapeJob.create({
      data: {
        url,
        status: "running",
        ownerId: user?.id ?? null
      }
    });

    // Start background processing WITHOUT awaiting it
    startBackgroundScraping(job.id, url).catch(err => {
      console.error(`Background job ${job.id} failed:`, err);
    });

    return NextResponse.json({ jobId: job.id, success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    
    if (id) {
      const job = await prisma.scrapeJob.findUnique({ where: { id } });
      return NextResponse.json(job);
    }
    
    // Return all running jobs
    const activeJobs = await prisma.scrapeJob.findMany({
      where: { status: "running" },
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(activeJobs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { id, action } = await req.json();
    
    if (action === 'stop' && id) {
      const updatedJob = await prisma.scrapeJob.update({
        where: { id },
        data: { status: 'stopped' }
      });
      return NextResponse.json({ success: true, job: updatedJob });
    }
    
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
