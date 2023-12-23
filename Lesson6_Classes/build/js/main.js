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
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('msi modern 8RC', 'Sara', 'Country roads', 20);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'Guitar');
console.log(Page.play('strums'));
