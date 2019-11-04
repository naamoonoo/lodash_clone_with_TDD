export const chunk = (array: any[], size: number) : any => {
	const res:any[][] = []

	for (let i:number = 0; i < array.length; i += size){
		res.push(array.slice(i, i +size))
	}

	// console.log(res);
	return res
}

// chunk([1,2,3,4], 3);
//
