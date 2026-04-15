import { VentoPlugin } from "eleventy-plugin-vento";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);
	eleventyConfig.addPlugin(VentoPlugin);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPassthroughCopy("style.css");
	return {
		markdownTemplateEngine: 'vto',
		htmlTemplateEngine: 'vto'
	}
}