"use strict";
// const chunk = (arr, n) => {
// 	const res = []
Object.defineProperty(exports, "__esModule", { value: true });
// 	for (i = 0; i < arr.length / n; i++) {
// 		res.push(arr.slice(i * n, (i + 1) * n))
// 	}
// 	return res
// }
const chunk = (arr, n) => {
    const res = [];
    for (let i = 0; i < arr.length / n; i++) {
        res.push(arr.slice(i * n, (i + 1) * n));
    }
    return res;
};
exports.default = chunk;
// console.log(chunk(["a", "b", "c", "d"], 2))
// console.log(chunk(["a", "b", "c", "d"], 3))
// chunk(["a", "b", "c", "d"], 3)
