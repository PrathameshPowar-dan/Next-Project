import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Train } from "@/types";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("train_guide");

    const body = await req.json().catch(() => null);
    let train: Train;

    if (body) {
      train = body as Train;
    } else {
      // fallback dummy train
      train = {
        _id: "12951",
        number: "12951",
        name: "Mumbai Rajdhani Express",
        source: "BCT",
        destination: "NDLS",
        stops: [
          {
            stationCode: "BCT",
            arrivalTime: "00:00",
            departureTime: "00:00",
            stopNumber: 1,
          },
          {
            stationCode: "BPL",
            arrivalTime: "05:30",
            departureTime: "05:35",
            stopNumber: 2,
          },
          {
            stationCode: "NDLS",
            arrivalTime: "12:30",
            departureTime: "12:30",
            stopNumber: 3,
          },
        ],
        classes: ["SL", "3AC", "2AC"],
        totalTime: "12:30",
      };
    }

    const result = await db.collection<Train>("trains").insertOne(train);

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
