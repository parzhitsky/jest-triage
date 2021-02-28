import BASE_CURRENCY from "./base-currency";

/** @private */
const DELIMITER = "_";

export default function createQuery(currency: string): string {
	return currency + DELIMITER + BASE_CURRENCY;
}
