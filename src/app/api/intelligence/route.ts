import { NextResponse } from 'next/server';
import { generateStrategicReport } from '@/lib/intelligence';

export async function GET() {
  try {
    const report = await generateStrategicReport();
    return NextResponse.json(report);
  } catch (error: any) {
    console.error('Intelligence API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// In case we want to force refresh via POST
export async function POST(req: Request) {
  try {
    const { ids } = await req.json().catch(() => ({ ids: undefined }));
    const report = await generateStrategicReport(ids);
    return NextResponse.json(report);
  } catch (error: any) {
    console.error('Intelligence API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
