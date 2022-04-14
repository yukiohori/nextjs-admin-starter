import { NextRequest, NextResponse } from "next/server";

export function middleware(_: NextRequest) {
  return NextResponse.next();
}
