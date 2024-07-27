/**
 /**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    trailingSlash: true, // Optional, but recommended for static export
    distDir: 'dist', // Change the output directory to 'dist'
    images: {
        unoptimized: true, // Disable Image Optimization for static export
    },
};

module.exports = nextConfig;