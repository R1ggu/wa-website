import { NextResponse } from "next/server";
import { getDatabase, saveDatabase } from "@/lib/database";

function findSessionUser(database, request) {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  return database.users.find((user) => user.sessionToken && user.sessionToken === token);
}

export async function PATCH(request) {
  const body = await request.json();
  const database = await getDatabase();
  const user = findSessionUser(database, request);

  if (!user) {
    return NextResponse.json({ error: "Du musst eingeloggt sein." }, { status: 401 });
  }

  if (!user.isPro) {
    return NextResponse.json({ error: "Nur Pro-User können Website-Informationen ändern." }, { status: 403 });
  }

  database.site = {
    ...database.site,
    title: String(body.title || database.site.title).trim(),
    subtitle: String(body.subtitle || database.site.subtitle).trim(),
    description: String(body.description || database.site.description).trim(),
    featuredNotice: String(body.featuredNotice || database.site.featuredNotice).trim(),
  };

  await saveDatabase(database);

  return NextResponse.json({ site: database.site });
}
