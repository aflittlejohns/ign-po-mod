import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "Ignition Perspective HMI Components Module",
	tagline: "A module of HMI components for the Dairy Industry",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://aflittlejohns.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/ign-po-mod/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "aflittlejohns", // Usually your GitHub org/user name.
	projectName: "ign-po-mod", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				svgr: {
					svgrConfig: {
						icon: true,
						expandProps: false,
					},
				},
				docs: {
					sidebarPath: "./sidebars.ts",
					routeBasePath: "/docs",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//   editUrl:
					//     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: false,
				pages: {
					path: "src/pages",
					routeBasePath: "/",
					include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
					exclude: [
						"**/_*.{js,jsx,ts,tsx,md,mdx}",
						"**/_*/**",
						"**/*.test.{js,jsx,ts,tsx}",
						"**/__tests__/**",
					],
					mdxPageComponent: "@theme/MDXPage",
					rehypePlugins: [],
					beforeDefaultRemarkPlugins: [],
					beforeDefaultRehypePlugins: [],
				},
				theme:{
					customCss:[
						'./src/css/custom.css'
					],
				}
			},
		],
	],
	markdown: {
		mermaid: true,
	},

	themes: [
		"@docusaurus/theme-mermaid",
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			/** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
			{
				// ... Your options.
				// `hashed` is recommended as long-term-cache of index file is possible.
				hashed: true,
				indexBlog: false,
				docsRouteBasePath: "/docs",
				// For Docs using Chinese, it is recomended to set:
				// language: ["en", "zh"],

				// If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
				// forceIgnoreNoIndex: true,
			},
		],
	],

	themeConfig: {
		// Replace with your project's social card
		navbar: {
			title: "Ignition Perspective HMI Components Module",
			logo: {
				alt: "Ignition Logo",
				src: "img/Logo-Ignition-Check.svg",
			},
			items: [
				{
					href: "https://github.com/aflittlejohns/ign-po-mod/",
					label: "GitHub",
					position: "right",
				},
			],
		},

		prism: {
			additionalLanguages: ["java"],
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
