

import pluginTOC from 'eleventy-plugin-toc'
import markdownItAnchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  const mdAnchorOpts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
    level: [1, 2, 3, 4],
  };

  const tocOpts = {
    tags: ['h1', 'h2', 'h3', 'h4'],
    wrapper: 'div',
    wrapperClass: 'toc',
    ul: true,
  }

  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAnchor, mdAnchorOpts)
    //mdLib.enable("code")
  });

  eleventyConfig.addPlugin(pluginTOC, tocOpts)

  // For getting all the asset with it
  eleventyConfig.addPassthroughCopy("christmas23/");
  eleventyConfig.addPassthroughCopy(
    { "_includes/layouts": "/" }
  );
};

