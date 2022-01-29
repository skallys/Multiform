const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  assetsInclude: ["**/*.glb"],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        app: resolve(__dirname, "app/index.html")
      }
    }
  }
});

// export default {
//   assetsInclude: ["**/*.glb"]
// };
