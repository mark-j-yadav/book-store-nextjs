import connectDB from "@/lib/db";
import Order from "@/models/Order";
import Cart from "@/models/Cart";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const { userId } = await req.json();

  const cart = await Cart.findOne({ userId }).populate("items.bookId");

  const total = cart.items.reduce(
    (sum, i) => sum + i.bookId.price * i.qty,
    0
  );

  await Order.create({
    userId,
    items: cart.items,
    total,
  });

  await Cart.deleteOne({ userId });

  return NextResponse.json({ success: true });
}
