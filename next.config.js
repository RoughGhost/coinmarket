/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'cdn.sanity.io',
      's3.coinmarketcap.com',
      's2.coinmarketcap.com',
    ],
  },
}
