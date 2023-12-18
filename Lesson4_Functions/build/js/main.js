"use strict";
// Literal types
let myName;
let userName;
userName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 4));
let substract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// } 
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 6));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default parameters
const sumAll = (a = 2, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 1, 2));
// The Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (isNumber(value))
        return 'number';
    if (typeof value == 'string')
        return 'string';
    return createError('This should never happen!');
};
