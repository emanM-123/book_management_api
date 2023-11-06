import mongoose from "mongoose";

export const connectToDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/book', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });      

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

