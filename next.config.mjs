/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for cPanel deployment (no Node.js required on server)
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
