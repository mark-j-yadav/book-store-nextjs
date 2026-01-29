import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  image: String,
  description: String,
});

export default mongoose.models.Book || mongoose.model("Book", BookSchema);
