module.exports = {
  publicPath: "./",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  devServer: {
    port: "8321",
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      // 为开发环境修改配置...
      config.devtool = "eval-source-map";
    }
  },
  chainWebpack: config => {
    // GraphQL Loader
    config.plugins.delete("preload"); // TODO: need test
    config.plugins.delete("prefetch"); // 消耗性能
  }
};
