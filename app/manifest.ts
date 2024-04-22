import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Markit",
    short_name: "Markit",
    description: "Markit",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a09",
    theme_color: "#0c0a09",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
