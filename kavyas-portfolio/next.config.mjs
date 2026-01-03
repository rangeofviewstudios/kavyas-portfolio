/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [],
    },
    // Suppress font optimization warnings for custom fonts
    compiler: {
        styledComponents: false,
    },
};

export default nextConfig;
