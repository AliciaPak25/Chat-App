import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: String,
  },
  { timestamps: true }
);

export const UserModel = model("user", UserSchema);
