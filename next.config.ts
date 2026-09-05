import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/services/dressing-tables",
        destination: "/services/vanity-tables",
        permanent: true,
      },
      {
        source: "/services/custom-sofas-beds",
        destination: "/services/custom-beds",
        permanent: true,
      },
      {
        source: "/services/dp-closing",
        destination: "/services",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
