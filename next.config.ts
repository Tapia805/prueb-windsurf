import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // <=== REQUERIDO para GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true, // <=== REQUERIDO para export estático
  },
};

export default nextConfig;
