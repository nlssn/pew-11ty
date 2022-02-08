module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/styles/");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
