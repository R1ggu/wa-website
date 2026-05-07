import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/database";

export async function GET() {
  const database = await getDatabase();

  return NextResponse.json({
    site: database.site,
    parts: database.parts,
    buildTips: database.buildTips,
  });
}
