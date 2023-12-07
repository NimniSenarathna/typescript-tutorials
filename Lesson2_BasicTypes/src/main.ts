// implicit
let myLname = 'Senarathna'

// explicit 
let myFname: string = 'Nimni'

// variable declaration
let myName: string;
let myAge: number;
let meaningOfLife: string;
let isLoading: boolean;
let album: any;
let album1: string | number;
let postId: string | number;
let isActive: number | boolean | string;
let re: RegExp = /\+/g;

myName = 'Nimni Senarathna';
myAge = 20;
meaningOfLife = 'coding';
isLoading = true;
album = 'Software Engineer';
album1 = 2003;

// function
const sum = (a: number, b: string) => {
    return a + b
}