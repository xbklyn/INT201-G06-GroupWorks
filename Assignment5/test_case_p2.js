// test cases of part 1 with import of part 2

import * as lib from "./modules/func_p1.js";

// case 1

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

const words = ["A", 1, 2, 3, "B", "C"];

console.log(words);
console.log();

let div_arr_function = lib.divArray(words);
let div_arr = div_arr_function(words);
console.log(div_arr);

console.log(lib.arrayOperator(div_arr, lib.sumDivArray));



// case 3

const numbers = [[4, -2, 5, 2, 4], [6, 7, 8]];

console.log(numbers);
console.log();

console.log(lib.sumDivArray(numbers));
