const postcss = require("postcss");
const postcssrc = require("postcss-load-config");
const postCssModules = require("postcss-modules");
const { readFileSync } = require("fs");

const execute = async filename => {
	let classNames = {};
	const modulesPlugin = postCssModules({
		getJSON: (_, json) => {
			classNames = json;
		}
	});

	const { plugins, options } = await postcssrc({
		filename
	});

	options.from = filename;
	options.to = null;

	const contents = readFileSync(filename).toString();
	await postcss([...plugins, modulesPlugin]).process(contents, options);

	return classNames;
};

module.exports = execute;

// CLI support
if (require.main === module) {
	(async () => {
		let result;
		try {
			result = await execute(process.argv[2]);
			console.log(JSON.stringify(result));
		} catch (e) {
			console.error(e.message);
		}
	})();
}
