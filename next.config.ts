import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', 
        hostname: '204.197.173.249',
        port: '8014', 
        pathname: '/storage/**', 
      },
    ],

    domains: [
      "peru-stork-399467.hostingersite.com", 
      "kashasears.codexwizardssquad.com"    
    ],
  },
};

export default nextConfig;
