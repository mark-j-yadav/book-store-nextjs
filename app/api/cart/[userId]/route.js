import connectDB from "@/lib/db";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  const cart = await Cart.findOne({ userId: params.userId })
    .populate("items.bookId");

  return NextResponse.json(cart);
}
