import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
      remotePatterns: [
          { hostname: 'avatars.githubusercontent.com'}, 
          { hostname: "via.placeholder.com" },
      ]
  }
};

export default nextConfig;
