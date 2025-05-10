module.exports = {
  // 插件
  plugins: [{ src: "~/plugins/nuxt-swiper-plugin.js", ssr: false }],
  css: ["swiper/dist/css/swiper.css"],
  /*
   ** Headers of the page
   */
  head: {
    title: "艺术教育平台",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "艺术教育平台,美术,音乐,字画",
      },
      {
        hid: "description",
        name: "description",
        content:
          "该艺术教育系统是国内领先的艺术类在线视频学习平台、职业教育平台！",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
  // 新增 server 配置，用于指定监听的端口和主机
  server: {
    port: 5000, // 可以根据需要修改端口号
    host: '127.0.0.1'
  }
};