export const fill = (
	array: any[],
	value: any,
	start: number = 0,
	end: number = Array.isArray(array) ? array.length : 0
): any[] => {
	if (!array) {
		return [];
	}

	for (let i: number = 0; i < array.length; i++) {
		if (i >= start && i < end) {
			array[i] = value;
		}
	}

	return array;
};
