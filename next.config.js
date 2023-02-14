/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/{레포지토리 이름}",
}

module.exports = {
  experimental: {
    appDir: true,
  },
  basePath: "/{레포지토리 이름}",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org/wikipedia/commons/",
        port: "",
        pathname: "/*",
      },
    ],
  },
};
