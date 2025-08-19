import { withImages } from 'next-images'
const nextConfig = {
  images: {
    domains: [], // replace with your image hosting domain
    formats: ['image/avif', 'image/webp']
},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  poweredByHeader: false,
  reactStrictMode: true
}
export default withImages(nextConfig;);