const months = ["Jan", "March", "April", "June"];
const temp = ["Wed", "Thu", "Fri", "Sat"];
const days = ["Sun", "Mon", "Tue"];

days.splice(days.length, 0, ...temp);
// inserts all elements of "temp" at index 3
console.log(days);
// expected output: Array ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

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

let numbers = [15, 62, 0, 9]
let removed_value = numbers.splice(-3, 2)
console.log(numbers);
// expected output: Array [15, 9]
console.log(removed_value);
// delete value: Array [62, 0]
