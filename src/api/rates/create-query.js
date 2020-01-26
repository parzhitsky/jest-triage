const BASE_CURRENCY = require("./base-currency");

/** @private */
const DELIMITER = "_";

/**
 * @param {string} currency
 * @returns {string}
 */
module.exports =
function createQuery(currency) {
	return currency + DELIMITER + BASE_CURRENCY;
}
