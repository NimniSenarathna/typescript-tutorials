// Arrays
let stringArr = ['one', 'hey', 'Nimni']

let guitars = ['Base', 'Classic', 'Electric', 2023]

let mixedData = ['EVH', 2003, true]

stringArr[0] = 'Nimni SE'
stringArr.push('hey typescript..')

guitars[0] = 2003
guitars.unshift('Bentley')

// Array anytype
let emptyArray = [] 

// Array explicit type
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Nimni', 20, true]

let mixed = ['John', 1, false]

myTuple[1] = 2023

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands