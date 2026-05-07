import { NextResponse } from "next/server";
import { getDatabase, makeToken, publicUser, saveDatabase } from "@/lib/database";

export async function POST(request) {
  const body = await request.json();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const isPro = Boolean(body.isPro);

  if (!name || !email || password.length < 6) {
    return NextResponse.json({ error: "Name, E-Mail und ein Passwort mit mindestens 6 Zeichen sind nötig." }, { status: 400 });
  }

  const database = await getDatabase();
  const exists = database.users.some((user) => user.email === email);

  if (exists) {
    return NextResponse.json({ error: "Diese E-Mail ist bereits registriert." }, { status: 409 });
  }

  const user = {
    id: `user-${Date.now()}`,
    name,
    email,
    password,
    isPro,
    sessionToken: makeToken(),
  };

  database.users.push(user);
  await saveDatabase(database);

  return NextResponse.json({ user: publicUser(user) }, { status: 201 });
}
