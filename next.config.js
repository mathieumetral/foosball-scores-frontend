/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  compiler: {
    relay: {
      src: './src',
      language: 'typescript',
      artifactDirectory: './data/__generated__',
      eagerEsModules: true,
    },
  },
};

export default nextConfig;
