// Arrays
var stringArr = ['one', 'hey', 'Nimni'];
var guitars = ['Base', 'Classic', 'Electric', 2023];
var mixedData = ['EVH', 2003, true];
stringArr[0] = 'Nimni SE';
stringArr.push('hey typescript..');
guitars[0] = 2003;
guitars.unshift('Bentley');
// Array anytype
var emptyArray = [];
// Array explicit type
var bands = [];
bands.push('Van Halen');
// Tuple
var myTuple = ['Nimni', 20, true];
var mixed = ['John', 1, false];
myTuple[1] = 2023;
// Objects
var myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
var exampleObj = {
    prop1: 'Nimni',
    prop2: true,
};
exampleObj.prop1 = 'NimniSen';
var evh = {
    name: 'Eddie',
    active: false,
    albums: [2003, 20, 'OU2023']
};
var JP = {
    name: 'Jimmy',
    albums: ['JI', 'JII', 'JIV']
};
var greetGuitarist = function (guitarsist) {
    if (guitarsist.name) {
        return "Hello ".concat(guitarsist.name, "!");
    }
    return 'Hello!';
};
console.log(greetGuitarist(JP));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
