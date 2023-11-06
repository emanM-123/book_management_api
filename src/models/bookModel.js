import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String,
  status: String,
  created_at: Date,
});

const Book = mongoose.model("Book", bookSchema);

export { Book };
