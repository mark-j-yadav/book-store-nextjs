import connectDB from "@/lib/db";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const books = await Book.find();
  return NextResponse.json(books);
}
