import * as lib from './func_part2_export.js';

//
console.log(lib.numbers);
let div_arr_function = lib.divideArray(lib.numbers);
let div_arr = div_arr_function(lib.numbers);
console.log(div_arr);
console.log(lib.sumDivideArray(div_arr, lib.sumDiv));

//
const testNum = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(testNum);
let div_testNum_check = lib.divideArray(testNum);
let div_testNum = div_testNum_check(testNum);
console.log(div_testNum);
console.log(lib.sumDivideArray(div_testNum, lib.sumDiv));
