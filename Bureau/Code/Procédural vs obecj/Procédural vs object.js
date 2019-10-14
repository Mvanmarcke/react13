
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    tellMyName(){
        console.log(`I am ${this.name}`);
    }
    tellMyAge(){
        console.log(`I am ${this.age} years old`);
    }
} 

const mary = new Person ('mary', '35');
mary.tellMyName();
mary.tellMyAge();

const john = new Person ('john', '40');
john.tellMyName();
john.tellMyAge();