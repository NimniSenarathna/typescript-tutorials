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
