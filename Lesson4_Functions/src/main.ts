// Type Alliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name: string,
    active?: boolean,
    albums: stringOrNumberArray
}

type userId = stringOrNumber

// Literal types
let myName: 'Nimni'

let userName: 'Nimni' | 'John' | 'Amy'
userName = 'Amy'

// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2,4))

let substract = function(c: number, d: number): number{
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// } 

let multiply: mathFunction = function (c,d) {
    return c * d
}

logMsg(multiply(2,6))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default parameters
const sumAll = (a: number = 2, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2,3,4))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined, 3))