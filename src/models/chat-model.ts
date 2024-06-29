import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    messages: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models.chats) {
  delete mongoose.models.chats;
}

const ChatModel = mongoose.model("chats", chatSchema);
export default ChatModel;
