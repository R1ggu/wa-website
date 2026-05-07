import HardwareApp from "@/components/HardwareApp";
import { getDatabase } from "@/lib/database";

export const dynamic = "force-dynamic";

export default async function Home() {
  const database = await getDatabase();

  return <HardwareApp initialData={database} />;
}
