//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor(name) {
        this.name = name;
        this.
    }
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Cat extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}