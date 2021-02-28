import BASE_CURRENCY from "./base-currency";
import rates from "./rates";
import createQuery from "./create-query";
import createUrl from "./create-url";

/** @private */
interface RateDataOK {
	[query: string]: number;
}

/** @private */
interface RateDataError {
	status: number;
	error: string;
}

/** @private */
type RateData =
	| RateDataOK
	| RateDataError
	;

/** @private */
const DEFAULT_RATE = 1;

/** @private */
const DEFAULT_RATE_PRINTABLE = DEFAULT_RATE.toFixed(2);

export default async function getRate(currency: string): Promise<number> {
	if (currency in rates === false) {
		let rate = DEFAULT_RATE;

		if (currency !== BASE_CURRENCY) {
			const query = createQuery(currency);
			const url = createUrl(query);

			try {
				const response = await fetch(url);
				const data: RateData = await response.json();

				if ("error" in data)
					throw new Error(`(${ data.status }) ${ data.error }`);

				rate = data[query];
			}

			catch (error) {
				console.warn(`Fallback rate of "${ currency }" to ${ DEFAULT_RATE_PRINTABLE } due to error: ${ error }`);
			}
		}

		rates[currency] = rate;
	}

	return rates[currency];
}
