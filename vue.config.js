const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/vue-pwa/" : "/",
  pwa: {
    // more details see: https://www.npmjs.com/package/@vue/cli-plugin-pwa

    // * name
    // * -----------------------------------------
    // - package.json's name --> 瀏覽器分頁名稱
    // - name in here
    //   --> manifest.json's name
    //   1. android: 加入主畫面, 安裝應用程式的名稱
    //   2. ios: content value of <meta name="apple-mobile-web-app-title" content="">
    name: "vue-pwa",

    // * meta
    // * -----------------------------------------
    themeColor: "#4DBA87",
    // <meta name="theme-color" content="#4DBA87">
    msTileColor: "#FFFFFF",
    // <meta name="msapplication-TileColor" content="#FFFFFF">
    appleMobileWebAppCapable: "yes",
    // <meta name="apple-mobile-web-app-capable" content="yes">
    appleMobileWebAppStatusBarStyle: "black",
    // <meta name="apple-mobile-web-app-status-bar-style" content="black">

    // * manifest
    // * -----------------------------------------
    // 1.
    // manifestPath: "manifest.json",
    // <link rel="manifest" href="/vue-pwa/manifest.json">
    // 2.
    // object in manifest.json
    manifestOptions: {
      name: "vue-pwa",
      // chrome 主動提示加入主畫面, 所需要的參數已有 defalut 值
      //   name: pwa.name
      //   short_name: pwa.name
      //   start_url: '.'
      //   display: 'standalone'
      //   theme_color: pwa.themeColor

      display: "standalone",
      // 在 android chrome 點擊更多:
      // - 顯示 [ 安裝應用程式 ] <-- fullscreen | standalone | minimal-ui
      // - 顯示 [ 加入主畫面 ] <-- browser
      start_url: "./?utm_source=web_app_manifest",
      // start_url: "/?utm_source=homescreen", // ref: https://app.starbucks.com/
    },
    // 3.
    // version to your icons and manifest, against browser’s cache.
    assetsVersion: new Date().getTime(),
    // <link rel="manifest" href="/vue-pwa/manifest.json?v=1650000066735">

    // * icons
    // * -----------------------------------------
    // iconPaths: { //
    //   faviconSVG: "img/icons/favicon.svg",
    //   favicon32: "img/icons/favicon-32x32.png",
    //   favicon16: "img/icons/favicon-16x16.png",
    //   appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
    //   maskIcon: "img/icons/safari-pinned-tab.svg",
    //   msTileImage: "img/icons/msapplication-icon-144x144.png",
    // },

    // * service worker
    // * -----------------------------------------
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      cacheId: "sheila-test-" + new Date().getTime(), // prefix of name in Cache Storage
      skipWaiting: true, // 删除旧的, 生成service work
      cleanupOutdatedCaches: true, // 清除 Cache Storage 其他 cache

      // exclude: [/\.map$/, /^manifest.*\.js$/], // workbox 官方文件寫的 default ( https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-WebpackGenerateSWOptions )
      // exclude: [/\.map$/, /img\/icons/, /\.ico$/], // 推測的 default 值 by sheila
      // include: [/\.(?:js|css|html)$/, /img/, "manifest.json", "robots.txt"], // 反推的值
    },
  },
});
