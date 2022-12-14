import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    userName: String,
    password: String,
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
