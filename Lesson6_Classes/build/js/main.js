"use strict";
// Inside a class - properties and methods are referred class member
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm age ${this.age}`;
    }
}
const David = new Coder('David', 'Beckham', 20);
console.log(David.getAge());
// console.log(David.lang)
// console.log(David.name)
