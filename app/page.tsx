import { getAllResources } from "@/lib/contentful";
import Resources from "@/components/Resources";

export default async function Home() {
  const resources = await getAllResources();

  return (
    <main>
      <Resources resources={resources} />
    </main>
  );
}
