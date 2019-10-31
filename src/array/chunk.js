const chunk = (arr, n) => {
	const res = []

	for (i = 0; i < arr.length / n; i++) {
		res.push(arr.slice(i * n, (i + 1) * n))
	}
	return res
}

// const chunk = (arr: Array<number>, n: number): Array<number> => {
// 	const res:Array<number>

// 	for (i = 0; i < arr.length / n; i++) {
// 		res.push(arr.slice(i * n, (i + 1) * n))
// 	}
// 	return res
// }

export default chunk

// console.log(chunk(["a", "b", "c", "d"], 2))
// console.log(chunk(["a", "b", "c", "d"], 3))

// chunk(["a", "b", "c", "d"], 3)
