import connectDB from "@/lib/db";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const book = await Book.create(data);
  return NextResponse.json(book);
}
