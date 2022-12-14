import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  verified: {
    type: Boolean,
    required: true,
  },
  country: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  memberSince: {
    type: String,
  },
  card: {
    type: String,
  },
  avatar: {
    type: String,
  },
});

export const User = mongoose.models.User || model("User", userSchema, "users");
