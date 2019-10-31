import chunk from "../array/chunk"
// const chunk = require("../array/chunk")
// const chunk = (arr, n) => {
// 	const res = []

// 	for (i = 0; i < arr.length / n; i++) {
// 		res.push(arr.slice(i * n, (i + 1) * n))
// 	}
// 	return res
// }

test("slice array with size of 2", () => {
	expect(chunk(["a", "b", "c", "d"], 2)).toStrictEqual([
		["a", "b"],
		["c", "d"]
	])
})

test("slice array with size of 3", () => {
	expect(chunk(["a", "b", "c", "d"], 3)).toStrictEqual([
		["a", "b", "c"],
		["d"]
	])
})
