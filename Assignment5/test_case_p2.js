// test cases of part 1 with import of part 2
// case 1

import * as lib from "./modules/func_p1.js";

const numbers = [2, 6, 8, 1, 9, 12, 5, 4, 6, 5, 0, -5, -9];
const testNumbers = lib.default;

console.log(numbers);
console.log(testNumbers);

console.log(lib.divArray());
console.log();

let div_arr_function = lib.divArray(numbers);
let div_arr = div_arr_function(numbers);
console.log(div_arr);

console.log(lib.arrayOperator(div_arr, lib.sumDivArray));

// case 2

import * as lib from "./modules/func_p1.js";

const numbers = ["A", 1, 2, 3, "B", "C"];

console.log(numbers);
console.log();

let div_arr_function = lib.divArray(numbers);
let div_arr = div_arr_function(numbers);
console.log(div_arr);

console.log(lib.arrayOperator(div_arr, lib.sumDivArray));
