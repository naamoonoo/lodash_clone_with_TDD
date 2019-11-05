import { chunk } from "../../array/chunk"
import _ from "lodash"

describe(`Creates an array of elements split into groups the length of size.
	If array can't be split evenly, the final chunk will be the remaining elements.`, () => {
	test("when input array is undefined", () => {
		expect(chunk(undefined, 2)).toEqual(_.chunk(undefined, 2))
	})

	test("when input array is empty", () => {
		expect(chunk([], 2)).toEqual(_.chunk([], 2))
	})

	test("when input array is null", () => {
		expect(chunk(null, 2)).toEqual(_.chunk(null, 2))
	})

	test("string array type, divide by zero", () => {
		expect(chunk(["a", "b", "c", "d"], 0)).toEqual([])
	})

	test("string array type, divide by one", () => {
		expect(chunk(["a", "b", "c", "d"], 1)).toEqual(
			_.chunk(["a", "b", "c", "d"], 1)
		)
	})

	test("string array type, divide by two", () => {
		expect(chunk(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]])
	})

	test("string array type, divide by three", () => {
		expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]])
	})

	test("number array type, divide by three", () => {
		expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10]
		])
	})
})
