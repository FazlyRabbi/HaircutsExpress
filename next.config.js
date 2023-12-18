/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = withPWA({
  env: {
    API_URL: process.env.API_URL,
  },
});

module.exports = nextConfig;
