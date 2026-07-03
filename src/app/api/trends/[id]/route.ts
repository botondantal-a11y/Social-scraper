import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/client";
import { getSessionUser } from "@/lib/session";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (typeof body.isOnRadar !== 'boolean') {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const updatedTrend = await prisma.trend.update({
      where: { id },
      data: { isOnRadar: body.isOnRadar }
    });

    return NextResponse.json({ success: true, trend: updatedTrend });
  } catch (error: any) {
    console.error("Error updating trend:", error);
    return NextResponse.json({ error: "Failed to update trend" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await getSessionUser();
    const { id } = await params;

    // Lekérjük a trendhez tartozó dokumentum ID-t
    const trend = await prisma.trend.findUnique({ where: { id } });
    if (!trend) {
      return NextResponse.json({ error: "Trend not found" }, { status: 404 });
    }
    if (trend.ownerId && trend.ownerId !== user?.id) {
      return NextResponse.json({ error: "Csak a saját trendjeidet törölheted." }, { status: 403 });
    }

    // Töröljük a trendet
    await prisma.trend.delete({ where: { id } });

    // Ha ez volt az utolsó trend a dokumentumban, töröljük a dokumentumot is
    const remaining = await prisma.trend.count({ where: { documentId: trend.documentId } });
    if (remaining === 0) {
      await prisma.trendDocument.delete({ where: { id: trend.documentId } });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting trend:", error);
    return NextResponse.json({ error: "Failed to delete trend" }, { status: 500 });
  }
}
