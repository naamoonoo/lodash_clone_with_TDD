import _ from "../.internal";

export const differenceBy = (differenceBy(array, [values], [iteratee=_.identity]): any[] => {
	if (!array) {
		return [];
	}

	if (!toComapre) {
		return array.map(ele => ele);
	}

	return array.filter(ele => !toComapre.includes(ele));
};
