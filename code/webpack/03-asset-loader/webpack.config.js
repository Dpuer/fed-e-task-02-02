const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /.css$/,
      use: ["style-loader", "css-loader"],
    }, ],
  },
};