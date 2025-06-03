module.exports = {
	plugins: [
		require('postcss-preset-env')({
			stage: 1, // enables CSS nesting and other modern features
		}),
	],
};
