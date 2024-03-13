const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin"); 
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3003,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "testMF",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      remotes: {
        "UILibrary": "UILibrary@http://localhost:3002/remoteEntry.js",
        "shell": "shell@http://localhost:3000/remoteEntry.js"
      },
      shared: {
        ...dependencies,
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
      },
    }),
  ],
};
