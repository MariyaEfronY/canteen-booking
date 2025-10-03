// models/Order.ts
import mongoose, { Schema, Document, models } from "mongoose";

export interface IOrder extends Document {
  customerName: string;
  items: { menuItem: string; quantity: number }[];
  totalPrice: number;
  status: string; // "pending" | "completed"
  createdAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    customerName: { type: String, required: true },
    items: [
      {
        menuItem: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Order = models.Order || mongoose.model<IOrder>("Order", OrderSchema);
export default Order;
