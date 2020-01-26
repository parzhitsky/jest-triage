const BASE_CURRENCY = require("./base-currency");

it('always equals to "UAH"', () => {
	expect(BASE_CURRENCY).toEqual("UAH");
});
