const path = require("path")
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@data": path.resolve(__dirname, "src/data/"),
      "@layout": path.resolve(__dirname, "src/layout/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@views": path.resolve(__dirname, "src/views/"),
      "@context": path.resolve(__dirname, "src/context/")
    }
  }
}
