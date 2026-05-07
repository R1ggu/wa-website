import { promises as fs } from "fs";
import path from "path";

const databasePath = path.join(process.cwd(), "..", "Backend", "database.json");

export async function getDatabase() {
  const file = await fs.readFile(databasePath, "utf8");
  return JSON.parse(file);
}

export async function saveDatabase(database) {
  await fs.writeFile(databasePath, `${JSON.stringify(database, null, 2)}\n`, "utf8");
}

export function publicUser(user) {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    isPro: Boolean(user.isPro),
    sessionToken: user.sessionToken,
  };
}

export function makeToken() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
