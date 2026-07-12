import type { NextConfig } from "next";

// STATIC_EXPORT=1 genera il sito statico in `out/` (per il deploy drag & drop);
// le immagini non passano dall'optimizer perché richiede un server.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const } : {}),
  images: {
    unoptimized: staticExport,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
