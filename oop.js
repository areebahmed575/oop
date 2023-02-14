"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
class Person {
    constructor() {
        this.personality = 'mystery';
    }
    person() {
        this.personality = 'mystery';
    }
    askQuestion() {
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('type 1 if you want to talk to others or type 2 if you keep yourself: ', (answer) => {
            if (answer == '1') {
                this.personality = 'Extrovert';
            }
            else if (answer == '2') {
                this.personality = 'Introvert';
            }
            else {
                this.personality;
            }
            rl.close();
        });
    }
}
class Student extends Person {
    constructor(name) {
        super();
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        return this.name = value;
    }
    showStatus() {
        return ' ' + this.name + ',your personality is ' + this.personality + ' ';
    }
}
const person1 = new Person();
const std1 = new Student('areeb');
person1.askQuestion();
console.log(std1.showStatus());
