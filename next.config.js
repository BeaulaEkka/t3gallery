/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["utfs.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
