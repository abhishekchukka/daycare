/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allows images from any domain
      },
      {
        protocol: "http",
        hostname: "*", // Allows images from any domain
      },
    ],
    dangerouslyAllowSVG: true, // Allows SVG images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Optional security settings
    unoptimized: true, // Disables automatic optimization for all images
  },
};

module.exports = nextConfig;
