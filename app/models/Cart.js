import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      qty: Number,
    },
  ],
});

export default mongoose.m
