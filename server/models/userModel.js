import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },

    address: {
      street: String,
      city: String,
      country: String,
      zipcode: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
