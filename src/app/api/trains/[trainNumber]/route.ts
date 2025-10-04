import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Train } from "@/types";

interface Params {
  trainNumber: string;
}

export async function GET(
  req: Request,
  { params }: { params: Params }
) {
  try {
    const client = await clientPromise;
    const db = client.db("train_guide");
    const trainCollection = db.collection<Train>("trains");

    const train = await trainCollection.findOne({
      number: params.trainNumber,
    });

    if (!train) {
      return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, train });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
