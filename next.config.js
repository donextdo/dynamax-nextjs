module.exports = {
  images: {
    domains: ['dynamax-gallery.s3.ap-southeast-2.amazonaws.com'],
    
  },
    webpack: (config, { isServer }) => {
      // Add Antic Didone font to Next.js
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/fonts/',
          outputPath: isServer ? `${process.env.NEXT_SERVER_ROOT}/_next/static/fonts/` : '_next/static/fonts/',
          name: '[name]-[hash].[ext]',
          esModule: false,
        },
      });
  
      return config;
    },
  };
  