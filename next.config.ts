import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
        {
        protocol: "https",
        hostname: "**",
        },
        {
        protocol: "https",
        hostname: "picsum.photos",
        },
    ],
    },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
    ],
  },
};

export default nextConfig;