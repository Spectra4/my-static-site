import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 👈 disables server-side image optimization for static export
  },
  reactStrictMode: true,
};

export default nextConfig;
