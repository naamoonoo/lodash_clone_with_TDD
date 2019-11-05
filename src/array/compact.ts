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

	// for loop are more proficient than for each than map/reduce/filter/find.

	// 1. They have a call back to execute so that act as a overhead .
	// => [in my case] filter get callback function to check

	// 2. There are lot of corner cases that javascript function consider like getters,
	// sparse array and checking arguments that are passed is array or not which
	// adds up to overhead
	// => [in my case] none-null check twice in my function and also in filter function
}
