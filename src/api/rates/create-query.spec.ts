import createQuery from "./create-query";

it("creates a string token that encodes relations between currencies", () => {
	expect(createQuery("USD")).toEqual("USD_UAH");
});
