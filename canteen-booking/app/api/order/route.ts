import { NextResponse } from "next/server";
// Update the import path if the file is in a different location, e.g.:
import dbConnect from "../../../lib/mongodb";   // ✅ go up 2 levels
import Order from "../../../models/Order";  

export async function GET() {
  await dbConnect();
  const orders = await Order.find().sort({ createdAt: -1 });
  return NextResponse.json(orders);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const { item } = body;

  const lastOrder = await Order.findOne().sort({ token: -1 });
  const token = lastOrder ? lastOrder.token + 1 : 101;

  const newOrder = new Order({ item, token });
  await newOrder.save();
  return NextResponse.json(newOrder);
}

export async function PUT(req: Request) {
  await dbConnect();
  const body = await req.json();
  const { id, status } = body;

  const updated = await Order.findByIdAndUpdate(id, { status }, { new: true });
  return NextResponse.json(updated);
}
