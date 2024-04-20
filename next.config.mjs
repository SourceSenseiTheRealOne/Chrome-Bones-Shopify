/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
  images: {
    domains: [
      "cdn.shopify.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "ucarecdn.com",
    ],
  },
  // video: {
  //   domains: ["res.cloudinary.com"],
  // },
};

export default nextConfig;
