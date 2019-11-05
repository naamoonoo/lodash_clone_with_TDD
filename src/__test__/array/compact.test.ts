import { compact } from "../../array/compact"
import _ from "lodash"

describe(`Creates an array with all falsey values removed.
	The values false, null, 0, "", undefined, and NaN are falsey.`, () => {
	test("[error input] when input array is undefined", () => {
		expect(compact(undefined)).toEqual(_.compact(undefined))
	})

	test("[error input] when input array is empty", () => {
		expect(compact([])).toEqual(_.compact([]))
	})

	test("[error input] when input array is null", () => {
		expect(compact(null)).toEqual(_.compact(null))
	})

	test("[basic test] whole true", () => {
		expect(compact(["a", "b", "c", "d"])).toEqual(["a", "b", "c", "d"])
	})

	test("[basic test] some falsy", () => {
		expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3])
	})

	test("[basic test] whole falsy", () => {
		expect(compact([null, undefined, false, NaN, "", 0])).toEqual([])
	})
})
