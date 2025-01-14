import path from "path";

const conf = [
  {
    performance: {
      maxEntrypointSize: 50000000,
      maxAssetSize: 50000000,
    },
    mode: "production",
    entry: "./src/index.js",
    output: {
      path: `${process.cwd()}/dist`,
      filename: "bluefox-script.js",
    },
    resolve: {
      extensions: [".js"],
      alias: {
        BlueFoxScript: path.resolve(process.cwd(), "src/"),
      },
    },
    optimization: {
      minimize: false,
    },
  },
  {
    performance: {
      maxEntrypointSize: 50000000,
      maxAssetSize: 50000000,
    },
    mode: "production",
    entry: "./src/index.js",
    output: {
      path: `${process.cwd()}/dist`,
      filename: "bluefox-script.min.js",
    },
    resolve: {
      extensions: [".js"],
      alias: {
        BlueFoxScript: path.resolve(process.cwd(), "src/"),
      },
    },
  },
  {
    performance: {
      maxEntrypointSize: 50000000,
      maxAssetSize: 50000000,
    },
    mode: "production",
    entry: "./src/index.es.js",
    output: {
      path: `${process.cwd()}/dist`,
      filename: "bluefox-script.es.js",
      library: {
        type: "module",
      },
    },
    resolve: {
      extensions: [".js"],
      alias: {
        BlueFoxScript: path.resolve(process.cwd(), "src/"),
      },
    },
    experiments: {
      outputModule: true,
    },
    optimization: {
      minimize: false,
    },
  },
  {
    performance: {
      maxEntrypointSize: 50000000,
      maxAssetSize: 50000000,
    },
    mode: "production",
    entry: "./src/index.es.js",
    output: {
      path: `${process.cwd()}/dist`,
      filename: "bluefox-script.es.min.js",
      library: {
        type: "module",
      },
    },
    resolve: {
      extensions: [".js"],
      alias: {
        BlueFoxScript: path.resolve(process.cwd(), "src/"),
      },
    },
    experiments: {
      outputModule: true,
    },
  },
];
export { conf as default };
