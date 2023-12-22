// Inside a class - properties and methods are referred class member
class Coder {
    secondLang!: string

    constructor (public readonly name: string, public music: string, private age: number, protected lang: string = 'Typescript') {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
    public getAge() {
        return `Hello, I'm age ${this.age}`;
    }
}

const David = new Coder('David', 'Beckham', 20)
console.log(David.getAge())
// console.log(David.lang)
// console.log(David.name)