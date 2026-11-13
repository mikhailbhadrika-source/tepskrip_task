/**
 * Module 06: OOP — Task 01
 *
 * Instructions:
 * 1. Create the classes and methods as described.
 * 2. Run: npm run example src/06-oop/tasks/task-01.ts
 */

// TODO: Create an interface `Animal` with properties: name (string), species (string)
//        and method: speak(): string

// TODO: Create a class `Dog` that implements `Animal`
//        - Constructor takes name and species (default species = "Dog")
//        - speak() returns "{name} says: Woof!"

// TODO: Create a class `Cat` that implements `Animal`
//        - Constructor takes name and species (default species = "Cat")
//        - speak() returns "{name} says: Meow!"

// TODO: Create an abstract class `Vehicle` with:
//        - protected property: brand (string)
//        - abstract method: getInfo(): string
//        - concrete method: getBrand(): string that returns brand

// TODO: Create class `Car` extending `Vehicle`
//        - Constructor takes brand and model (string)
//        - getInfo() returns "{brand} {model}"

// Uncomment and use after completing the TODOs:

interface Animal {
    name: string;
    species: string;
    speak(): string;
}
class Dog implements Animal {
    name: string;
    species: string = 'Dog';

    constructor (
        name: string,
    ) {
        this.name = name
    }
    speak(): string {
    return `${this.name} says Woof!`;
    }
}

class Cat implements Animal {
    name: string;
    species: string = 'Cat';

    constructor (
        name: string,
    ) {
        this.name = name
    }
    speak(): string {
    return `${this.name} says Meow!`;
    }
}

abstract class Vehicle {
    constructor (protected brand: string) {
        this.brand = brand;
    }
    abstract getInfo(): string;
    getBrand(): string {
        return (`Brand: ${this.brand}`)
    }
}

class Car extends Vehicle {
    brand: string;
    model: string;

    constructor (
        brand: string,
        model: string
    ) {
        super(brand);
        this.brand = brand;
        this.model = model
    }
    getInfo(): string {
        return (
            `Brand: ${this.brand}
            Model: ${this.model}`)
    }
}


const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const car = new Car("Toyota", "Camry");

console.log(dog.speak());   // expected: "Buddy says: Woof!"
console.log(cat.speak());   // expected: "Whiskers says: Meow!"
console.log(car.getInfo()); // expected: "Toyota Camry"
console.log(car.getBrand()); // expected: "Toyota"

console.log("Complete the TODOs above, then uncomment the test code.");