const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  entry: 
  {
    main : "./web/main.ts",
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  mode: "development",
  plugins: [
    new CopyPlugin({
        patterns: [
          { from: './public/index.html'},
        ],
    }), 
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, ".")
    })
  ],
    experiments : {
        asyncWebAssembly : true
    }

};
