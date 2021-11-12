const path = require("path");
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    path: "https://s3.us-east-2.amazonaws.com",
  },
  env: {
    TOKEN: process.env.TOKEN,
    URL_BACKEND: process.env.URL_BACKEND,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
