import { NextResponse } from "next/server";
import { dbConnect } from "../../../../lib/mongodb";
import { MenuItem } from "../../../../models/MenuItem";


export async function GET() {
  await dbConnect();
  const menu = await MenuItem.find({});
  return NextResponse.json(menu);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const { name, price, image, description } = body;
  const newItem = new MenuItem({ name, price, image, description });
  await newItem.save();
  return NextResponse.json(newItem);
}
