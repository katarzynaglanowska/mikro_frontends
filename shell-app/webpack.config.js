const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3000,
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
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        testMF: "testMF@http://localhost:3003/remoteEntry.js",
        UILibrary: "UILibrary@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./hooks/useStore": "./src/hooks/useStore.ts",
        "./hooks/useStoreSelector": "./src/hooks/useStoreSelector.ts",
        "./providers/StoreProvider": "./src/providers/StoreProvider.tsx",
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
