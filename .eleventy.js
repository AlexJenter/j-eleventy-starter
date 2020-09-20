module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ _images: "img" });
  return {
    dir: {
      input: ".",
      output: "docs",
      pathPrefix: "/j-eleventy-starter/",
    },
  };
};
