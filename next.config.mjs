/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",     // Required for static hosting
  images: {
    unoptimized: true,  // Avoids Next.js Image Optimization (not supported on static)
  },
  trailingSlash: true,  // Important for static hosting to avoid 404s
};

export default nextConfig;
