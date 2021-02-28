module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    "@babel/proposal-class-properties",
    [
      "babel-plugin-styled-components",
      {
        "ssr": false,
        "fileName": false
      }
    ],
  ],
};
