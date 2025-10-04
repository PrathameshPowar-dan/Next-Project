import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Train } from "@/types";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("train_guide");
    const trains = await db.collection<Train>("trains").find({}).toArray();

    return NextResponse.json({ success: true, trains });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
