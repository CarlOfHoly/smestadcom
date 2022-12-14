export const SITE = {
	name: 'Portfolio Site',

	origin: 'https://astrowind.vercel.app',
	basePathname: '/',

	title: 'Carl Portfolio',
	description: '🚀 AstroWind is a free and ready to start template to make your website using Astro and Tailwind CSS.',

	googleAnalyticsId: "G-LY75PF7JLS", // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'KoKOzMA361I-lDhuAME6NEdPYoCdULoOIETgWMpCtK8',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'articles', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
