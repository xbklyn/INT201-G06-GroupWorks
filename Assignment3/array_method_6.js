const months = ["Jan", "March", "April", "June"];
const temp = ["Wed", "Thu", "Fri", "Sat"];
const days = ["Sun", "Mon", "Tue"];

days.splice(days.length, 0, ...temp);
// inserts all elements of "temp" at index 3
console.log(days);

months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

months.splice(2, 2);
// deletes 2 elements from index 2
console.log(months);
// expected output: Array ["Jan", "Feb", "May"]

months.splice(1);
// deletes all elements from index 1
console.log(months);
// expected output: Array ["Jan"]

const arr = [2, 6, 8, 15, 9, 12, 5, 4];

function divideArray(arr) {
	let result = [];
	if (arr === null || arr === undefined) {
		return -1;
	}
	if (arr.length <= 1) {
		return arr;
	} else {
		let temp = arr.splice(Math.trunc(arr.length / 2));
		result.push(...temp);
		return [arr, result];
	}
}

console.log(days);
console.log(divideArray(days));
