/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'global-files-nginx.builderall.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.builderall.com',
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://global-files-nginx.builderall.com https://storage.builderall.com; font-src 'self' https://fonts.gstatic.com; frame-src https://www.google.com/recaptcha/;",
          }
        ],
      },
    ]
  },
};

export default nextConfig;
