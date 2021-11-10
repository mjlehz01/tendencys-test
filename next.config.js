const path = require("path");
module.exports = {
  reactStrictMode: true,
  env: {
    TOKEN: process.env.TOKEN,
    URL_BACKEND: process.env.URL_BACKEND,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
