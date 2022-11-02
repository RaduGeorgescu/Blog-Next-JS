import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(console.log("connected to DB"));

export default connectMongo;
