// functions of part 1 with export part 2

const testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function divArray(arr = []) {
	if (arr === null || arr === undefined) {
		return -1;
	}
	if (arr.length <= 1) {
		return arr;
	} else {
		function divide(array = arr) {
			let div_arr = [];
			let temp = array.splice(Math.trunc(array.length / 2));
			div_arr.push(...temp);
			return [array, div_arr];
		}
		return divide;
	}
}

function setArray(arr) {
	function greaterThan(number) {
		let result = [];
		arr.forEach((i) => {
			if (i > number) {
				result.push(i);
			}
		});
		return result;
	}
	return greaterThan;
}

function sumDivArray([div_arr1, div_arr2]) {
	let output = [];
	output.push(div_arr1.reduce((total, value) => total + value));
	output.push(div_arr2.reduce((total, value) => total + value));
	return output;
}

function arrayOperator(arr, fn) {
	return fn(arr);
}

// export section
export {
	testNumbers as default,
	divArray,
	sumDivArray,
	arrayOperator,
	setArray,
};
