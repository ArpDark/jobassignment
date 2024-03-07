import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static/css/',
            publicPath: ['/_next/static/css/', '__next/static/css/'],
          },
        },
        'extract-css-chunks-webpack-plugin',
      ],
    });
    return config;
  },
}

export default nextConfig;