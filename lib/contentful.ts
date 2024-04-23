import { ResourceSkeleton } from "@/types/Resource";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: "master",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllResources() {
  try {
    const response =
      await client.withoutUnresolvableLinks.getEntries<ResourceSkeleton>({
        content_type: "resource",
        limit: 1000,
      });

    return response.items;
  } catch (error) {
    console.error("Error fetching resources:", error);
    return [];
  }
}
