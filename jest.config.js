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
		"**/*.spec.ts?(x)",
		"!**/*.snap.spec.tsx",
	],
	transform: {
		"\\.tsx?$": "ts-jest",
	},
	setupFiles: [
		"<rootDir>/src/.setup-tests.ts",
	],
	restoreMocks: true,
	errorOnDeprecated: true,
	snapshotResolver: "<rootDir>/src/.snapshot-resolver.js",
	cacheDirectory: "<rootDir>/.cache/jest",
};
