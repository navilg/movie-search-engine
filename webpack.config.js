const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: `${SRC_DIR}/app.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        include: SRC_DIR,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {

        test: /\.js?/,
        include: SRC_DIR,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'eslint-loader',
            options:
              { fix: true },
          },

        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],

  },
  mode: 'development',
};

module.exports = config;
