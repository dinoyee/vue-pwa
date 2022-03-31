const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/vue-pwa/" : "/",
  pwa: {
    name: "vue-pwa",
    themeColor: "#4DBA87",
    msTileColor: "#FFFFFF",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
    },
  },
});
