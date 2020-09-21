import mongoose from "mongoose";

const whatsappMessageSchema = mongoose.Schema({
  message: String,
  name: String,
  timeStamp: String,
  received: Boolean,
});

export default mongoose.model("messageContent", whatsappMessageSchema);
