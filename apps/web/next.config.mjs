/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  transpilePackages: [
    "@lomio/ai",
    "@lomio/core",
    "@lomio/shared",
    "@lomio/config",
    "@lomio/db"
  ]
};

export default nextConfig;
