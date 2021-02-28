module.exports = {
	/**
	 * @param {string} testFilePath Path to test file, relative to the current file (e.g., "components/article.spec.tsx")
	 * @param {string} snapExtension Snapshot extension, including leading dot (e.g., ".snap")
	 * @returns {string}
	 */
	resolveSnapshotPath(testFilePath, snapExtension) {
		return testFilePath.replace(".spec", `${ snapExtension }.spec`);
	},

	/**
	 * @param {string} snapFilePath Path to snapshot file, relative to the current file (e.g., "components/article.snap.spec.tsx")
	 * @param {string} snapExtension Snapshot extension, including leading dot (e.g., ".snap")
	 * @returns {string}
	 */
	resolveTestPath(snapFilePath, snapExtension) {
		return snapFilePath.replace(snapExtension, "");
	},

	testPathForConsistencyCheck: "components/article.tsx",
};
