import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.refabry.com",
        pathname: "/storage/product/**",
      },
    ],
  },
};

export default nextConfig;
