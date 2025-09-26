import mongoose, { Schema, models } from "mongoose";

const MenuItemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: false },
});

export const MenuItem = models.MenuItem || mongoose.model("MenuItem", MenuItemSchema);
