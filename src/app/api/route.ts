import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ json: 200, message: "success" });
}
