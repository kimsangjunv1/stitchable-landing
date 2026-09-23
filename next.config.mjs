/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
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
                destination: "/guides/quickstart",
                permanent: true,
            },
            {
                source: "/fivepixels/guide/backend-api",
                destination: "/docs/persistence",
                permanent: true,
            },
            {
                source: "/guide",
                destination: "/guides/quickstart",
                permanent: true,
            },
            {
                source: "/guide/backend-api",
                destination: "/docs/persistence",
                permanent: true,
            },
            {
                source: "/guides/shortcuts",
                destination: "/docs/modes",
                permanent: true,
            },
            {
                source: "/docs/modes-and-shortcuts",
                destination: "/docs/modes",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
