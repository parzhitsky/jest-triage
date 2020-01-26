const createUrl = require("./create-url");

it("creates url to API, based on the supplied query", () => {
	expect(createUrl("USD_UAH")).toEqual(
		"https://free.currconv.com/api/v7/convert?q=USD_UAH&compact=ultra&apiKey=b9f349888827111f4719"
	);

	expect(createUrl("USD_EUR")).toContain("?q=USD_EUR");
	expect(createUrl("EUR_USD")).toContain("?q=EUR_USD");
});

it("forbids supplying empty query", () => {
	expect(() => createUrl("")).toThrowError("cannot be empty");
});
