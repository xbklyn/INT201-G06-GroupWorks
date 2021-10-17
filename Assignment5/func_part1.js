const numbers = [2, 6, 8, 1, 9, 12, 5, 4, 6, 5, 0, -5, -9];

function divideArray(arr = []) {
	if (arr === null || arr === undefined) {
		return -1;
	}
	if (arr.length <= 1) {
		return arr;
	} else {
		function divide(array) {
			let div_arr = [];
			let temp = array.splice(Math.trunc(array.length / 2));
			div_arr.push(...temp);
			return [array, div_arr];
		}
		return divide;
	}
}

function sumDiv([div_arr1, div_arr2]) {
	let output = [];
	output.push(div_arr1.reduce((total, value) => total + value));
	output.push(div_arr2.reduce((total, value) => total + value));
	return output;
}

function sumDivideArray(div_arr, fn) {
	return fn(div_arr);
}

console.log(numbers);
console.log();

console.log(divideArray());
console.log();

let div_arr_function = divideArray(numbers);
let div_arr = div_arr_function(numbers);
console.log(div_arr);

console.log(sumDivideArray(div_arr, sumDiv));
//export
export { divideArray };
export { sumDiv };
export { sumDivideArray };
export { numbers };
