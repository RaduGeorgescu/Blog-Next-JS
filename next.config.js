const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  async redirects() {
    return [
      {
        source: "/search/post/:slug",
        destination: "/post/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
