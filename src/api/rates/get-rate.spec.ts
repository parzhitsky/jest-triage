import getRate from "./get-rate";

/** @private */
const fetch = jest.fn(async () => ({
	ok: true,
	json: async () => ({
		"USD_UAH": 42,
		"USD_EUR": 17,
	} as object),
}));

// @ts-ignore
global.fetch = fetch;

afterEach(() => {
	fetch.mockClear();
});

describe("getRate()", () => {
	it("fetches new rates from the API", async () => {
		expect(await getRate("USD")).toEqual(42);

		expect(fetch).toHaveBeenCalledTimes(1);
	});

	it("uses cache for subsequent fetches of the currency", async () => {
		expect(await getRate("USD")).toEqual(42);

		expect(fetch).toHaveBeenCalledTimes(0);
	});

	it("defaults to rate being 1.00 on errors", async () => {
		jest.spyOn(console, "warn").mockImplementation(() => {});

		fetch.mockResolvedValue({
			ok: false,
			json: async () => ({
				status: 500,
				error: "Internal server error",
			}),
		});

		expect(await getRate("EUR")).toEqual(1);

		expect(fetch).toHaveBeenCalledTimes(1);
		expect(console.warn).toHaveBeenCalledWith(
			"Fallback rate of \"EUR\" to 1.00 due to error: Error: (500) Internal server error"
		);
	});
});
