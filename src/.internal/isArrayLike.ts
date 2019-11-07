// isArrayLike

export default (value: any): Boolean => {
	return value && value instanceof Array && Array.isArray(value);
};
