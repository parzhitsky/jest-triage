const BASE_CURRENCY = require("./base-currency");
const rates = require("./rates");
const createQuery = require("./create-query");
const createUrl = require("./create-url");

/** @typedef {Record<string, number>} RateData */
void 0;

/** @private */
const DEFAULT_RATE = 1;

/**
 * @param {string} currency
 * @returns {Promise<number>}
 */
module.exports =
async function getRate(currency) {
	if (currency in rates === false) {
		let rate = DEFAULT_RATE;

		if (currency !== BASE_CURRENCY) {
			const query = createQuery(currency);
			const url = createUrl(query);
	
			try {
				const response = await fetch(url);
	
				/** @type {RateData} */
				const data = await response.json();
	
				rate = data[query];
			}
	
			catch (error) {
				console.warn(`Fallback rate of "${ currency }" to 1.00 due to error: ${ error }`);
			}
		}

		rates[currency] = rate;
	}

	return rates[currency];
}
