import { NextRequest, NextResponse } from "next/server";

import connectDb from "../../lib/connectDB";

export async function POST(req: Request) {
  const client = await connectDb();
  const db = client.db("test");
  const collection = db.collection("todos");
  const todo = await collection.insertOne({ text: "Hello World" });
  return NextResponse.json({ message: "Hello World" });
}
