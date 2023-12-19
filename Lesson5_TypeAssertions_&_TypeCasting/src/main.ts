type One = string
type Two = string | number
type Three = 'hello'

// converting types with assertions
// convert to more or less specific
let a: One = 'hello'
let b = a as Two   // less specific
let c = a as Three  // more specific

// angle bracket syntax instead of as
let d = <One> 'world'
let e = <string | number> 'world'

// Narrowing returning values with assertion
const addOrConcat = (a: number, b: number, c: 'concat' | 'add'): number | string => {
    if (c == 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

// Beware here! ts sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'add') as number

// Double casting or Force casting simply reffered as two assertions
// 10 as string - not allowed, if want - use unknown
(10 as unknown) as string

// The DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')  // not works for React

img.src
myImg.src  // non null assertions
nextImg.src