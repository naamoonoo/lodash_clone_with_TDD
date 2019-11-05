export const compact = (array: any[]): any[] => {
	// #1 using for loop(forEach) to check each value
	// const res: any[] = []

	// if (!array) {
	// 	return res
	// }

	// array.forEach(ele => {
	// 	if (ele) {
	// 		res.push(ele)
	// 	}
	// })

	// return res

	// #2 using filter method
	// little bit more readable
	// if (!array) {
	// 	return []
	// }

	// const isNotFalsy = (ele: any): Boolean => {
	// 	return ele ? true : false
	// }

	// // filter get function
	// return array.filter(isNotFalsy)

	// #3 inline function
	return !array ? [] : array.filter(ele => (ele ? true : false))
}
