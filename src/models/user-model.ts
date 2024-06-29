import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    clerkUserId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

if (mongoose?.models?.users) {
  delete mongoose.models.users;
}

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
