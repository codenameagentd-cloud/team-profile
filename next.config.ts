import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/team-profile",
  images: { unoptimized: true },
};

export default nextConfig;
