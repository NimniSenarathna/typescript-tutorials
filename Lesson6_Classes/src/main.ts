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

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }
    public getLang() {
        return `I write ${this.lang}`
    }
}

const Sara = new WebDev('msi modern 8RC', 'Sara', 'Country roads', 20)
console.log(Sara.getLang())

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }    

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'Guitar')
console.log(Page.play('strums'))