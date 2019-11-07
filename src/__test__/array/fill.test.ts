import { fill } from "../../array/fill";
import _ from "lodash";

describe(`Fills elements of array with value from start up to, but not including, end.`, () => {
	[[], undefined, null].forEach(input => {
		test(`[input error] ${input} case`, () => {
			expect(fill(input, 3)).toEqual([]);
		});
	});

	test(`[basic test] fill number in string array`, () => {
		expect(fill([1, 2, 3], "a")).toEqual(["a", "a", "a"]);
	});

	test(`[basic test] fill 3 at empty array `, () => {
		expect(fill(Array(3), 3)).toEqual([3, 3, 3]);
	});

	test(`[basic test] fill * form 1 to 3 `, () => {
		expect(fill([4, 6, 8, 10], "*", 1, 3)).toEqual([4, "*", "*", 10]);
	});
});
