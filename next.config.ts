import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/libro",
        destination: "/libro-psicologia-del-gioco",
        permanent: true,
      },
      {
        source: "/book",
        destination: "/en/libro-psicologia-del-gioco",
        permanent: true,
      },
      {
        source: "/en/book",
        destination: "/en/libro-psicologia-del-gioco",
        permanent: true,
      },
      {
        source: "/unifi/slides",
        destination: "/unifi/slides.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
