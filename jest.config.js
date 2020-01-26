module.exports = {
	verbose: true,
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
	restoreMocks: true,
	errorOnDeprecated: true,
	cacheDirectory: "<rootDir>/.cache/jest",
};
