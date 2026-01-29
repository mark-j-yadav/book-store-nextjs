import connectDB from "@/lib/db";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  const book = await Book.findById(params.id);
  return NextResponse.json(book);
}
