module.exports = {
	/**
	 * @param {string} testPath Path to test file, relative to the current file (e.g., "components/article.spec.tsx")
	 * @param {string} snapshotExtension Snapshot extension, including leading dot (e.g., ".snap")
	 * @returns {string}
	 */
	resolveSnapshotPath(testPath, snapshotExtension) {
		return testPath.replace(".spec", `${ snapshotExtension }.spec`);
	},

	/**
	 * @param {string} snapPath Path to snapshot file, relative to the current file (e.g., "components/article.snap.tsx")
	 * @param {string} snapshotExtension Snapshot extension, including leading dot (e.g., ".snap")
	 * @returns {string}
	 */
	resolveTestPath(snapPath, snapshotExtension) {
		return snapPath.replace(snapshotExtension, "");
	},

	testPathForConsistencyCheck: "components/article.tsx",
};
