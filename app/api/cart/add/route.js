import connectDB from "@/lib/db";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const { userId, bookId } = await req.json();

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [{ bookId, qty: 1 }],
    });
  } else {
    const item = cart.items.find(i => i.bookId == bookId);
    if (item) item.qty += 1;
    else cart.items.push({ bookId, qty: 1 });
    await cart.save();
  }

  return NextResponse.json({ success: true });
}
