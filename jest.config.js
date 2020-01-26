module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	verbose: true,
	rootDir: ".",
	roots: [
		"<rootDir>/src",
	],
	testMatch: [
		"**/*.spec.js",
		"**/*.spec.tsx",
	],
	setupFiles: [
		"<rootDir>/src/.setup-tests.js",
	],
	restoreMocks: true,
	errorOnDeprecated: true,
	cacheDirectory: "<rootDir>/.cache/jest",
};
