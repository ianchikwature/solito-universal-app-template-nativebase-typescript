/** @type {import('next').NextConfig} */

const { withNativebase } = require('@native-base/next-adapter')
const withImages = require('next-images')
const withExpo = require("@expo/next-adapter")

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = withNativebase({
  dependencies: [
    '@expo/next-adapter',
    '@expo/vector-icons',
    'react-native-vector-icons',
    'react-native-vector-icons-for-web',
    'solito',
    'app',
  ],
  plugins: [
    withImages,
    [
      withExpo,
      {
        projectRoot: __dirname
      }
      ]
    ],
    nextConfig: {
      images: {
        disableStaticImages: true,
      },
      reactStrictMode: true,
      webpack5: true,
      webpack: (config, options) => {
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          'react-native$': 'react-native-web',
          '@expo/vector-icons': 'react-native-vector-icons',
        }
        config.resolve.extensions = [
          '.web.js',
          '.web.ts',
          '.web.tsx',
          ...config.resolve.extensions,
        ]
      return config
      },
    },
})
