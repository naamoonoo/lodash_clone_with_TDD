export const difference = (array: any[], toComapre: any[]): any[] => {
	if (!array) {
		return [];
	}

	if (!toComapre) {
		return array.map(ele => ele);
	}

	return array.filter(ele => !toComapre.includes(ele));
};
