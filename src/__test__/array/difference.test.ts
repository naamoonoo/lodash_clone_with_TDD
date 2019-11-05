import { difference } from "../../array/difference";
import _ from "lodash";

describe(`Creates an array with all falsey values removed.
	The values false, null, 0, "", undefined, and NaN are falsey.`, () => {
	test("[input error] when input array is undefined", () => {
		expect(difference(undefined, undefined)).toEqual(
			_.difference(undefined, undefined)
		);
	});

	test("[input error] when input array is empty", () => {
		expect(difference([], [])).toEqual(_.difference([], []));
	});

	test("[input error] when input array is null", () => {
		expect(difference(null, null)).toEqual(_.difference(null, null));
	});

	test("[basic test] whole true", () => {
		expect(difference(["a", "b", "c", "d"], ["a", "b", "c", "d"])).toEqual(
			_.difference(["a", "b", "c", "d"], ["a", "b", "c", "d"])
		);
	});

	test("[basic test] some falsy", () => {
		expect(difference([0, 1, false, 2, "", 3], [3, 1])).toEqual(
			_.difference([0, 1, false, 2, "", 3], [3, 1])
		);
	});

	test("[basic test] whole falsy", () => {
		expect(difference([null, undefined, false, NaN, "", 0], [])).toEqual(
			difference([null, undefined, false, NaN, "", 0], [])
		);
	});
});
