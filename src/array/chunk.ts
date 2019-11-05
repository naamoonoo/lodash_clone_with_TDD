export const chunk = (array: any[], size: number): any[][] => {
	const res: any[][] = []

	if (!array || size < 1) {
		return res
	}

	for (let i: number = 0; i < array.length; i += size) {
		res.push(array.slice(i, i + size))
	}

	return res
}
