/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.lawendakrynicka.pl',
                port: '',
            },
        ],
    },
};

export default nextConfig;
