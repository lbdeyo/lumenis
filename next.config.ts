import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    incomingRequests: {
      ignore: [/\/json\/version/],
    },
  },
};

export default nextConfig;
