import mongoose, { Schema, models } from "mongoose";

const OrderSchema = new Schema({
  token: { type: Number, unique: true },
  item: { type: String, required: true },
  status: { type: String, default: "Pending" }, // Pending | Ready | Completed
  createdAt: { type: Date, default: Date.now },
});

export const Order = models.Order || mongoose.model("Order", OrderSchema);
