"use strict";
// converting types with assertions
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// angle bracket syntax instead of as
let d = 'world';
let e = 'world';
// Narrowing returning values with assertion
const addOrConcat = (a, b, c) => {
    if (c == 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Beware here! ts sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'add');
// Double casting or Force casting simply reffered as two assertions
// 10 as string - not allowed, if want - use unknown
10;
