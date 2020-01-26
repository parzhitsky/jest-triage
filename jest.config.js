module.exports = {
	verbose: true,
	errorOnDeprecated: true,
	rootDir: ".",
	roots: [
		"<rootDir>/src",
	],
	testMatch: [
		"**/*.spec.js",
	],
	setupFiles: [
		"<rootDir>/src/.setup-tests.js",
	],
	cacheDirectory: "<rootDir>/.cache/jest",
};
