import path from "path";
import webpack from "webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config: webpack.Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ttf|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true 
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true 
            }
          }
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true
  },
};

export default config;
