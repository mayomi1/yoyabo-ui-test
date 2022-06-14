/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const path = require('path')
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  webpack(config) {
    // Allow Next to resolve Typescript custom paths
    config.resolve.modules.unshift(__dirname);

    // SVG Loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    // File loader
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'static/images',
            publicPath: '/_next/static/images',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = withPlugins([], nextConfig)

