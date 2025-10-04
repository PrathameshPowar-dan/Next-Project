import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("train_guide");

    const collections = await db.listCollections().toArray();

    return NextResponse.json({
      success: true,
      collections: collections.map(c => c.name),
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
