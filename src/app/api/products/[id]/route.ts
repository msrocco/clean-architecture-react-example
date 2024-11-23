import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const data = {
    id,
    name: "Airpods Pro",
    price: 279.99,
    imageUrl: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return NextResponse.json(data, { status: 200 });
}
