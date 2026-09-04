/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/fivepixels",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fivepixels/guide",
        destination: "/guide",
        permanent: true,
      },
      {
        source: "/fivepixels/guide/backend-api",
        destination: "/guide/backend-api",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
