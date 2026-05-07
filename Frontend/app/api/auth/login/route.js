import { NextResponse } from "next/server";
import { getDatabase, makeToken, publicUser, saveDatabase } from "@/lib/database";

export async function POST(request) {
  const body = await request.json();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");

  const database = await getDatabase();
  const user = database.users.find((candidate) => candidate.email === email && candidate.password === password);

  if (!user) {
    return NextResponse.json({ error: "Login fehlgeschlagen. Prüfe E-Mail und Passwort." }, { status: 401 });
  }

  user.sessionToken = makeToken();
  await saveDatabase(database);

  return NextResponse.json({ user: publicUser(user) });
}
