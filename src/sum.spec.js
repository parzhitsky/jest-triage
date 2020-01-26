const sum = require("./sum");

describe("sum()", () => {
	it("mathematically sums two numerical operands", () => {
		expect(sum(2, 3)).toEqual(5);
	});

	it("sets an operand to 0 by default", () => {
		expect(sum()).toEqual(0);
		expect(sum(2)).toEqual(2);
		expect(sum(3)).toEqual(3);
	});
});
