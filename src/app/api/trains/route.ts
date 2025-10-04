import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("train_guide");
    const trains = await db.collection("trains").find({}).limit(10).toArray();

    return NextResponse.json({ success: true, trains });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, error: "DB error" }, { status: 500 });
  }
}
