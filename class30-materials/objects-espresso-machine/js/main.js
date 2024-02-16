//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor (color, make, model, price) {
        this.color = color
        this.make = make
        this.model = model
        this.price = price 
    }
    turnOn() {
        console.log('I am on now!')
    }
    steam() {
        console.log('Its summer SALE 50%')
    }
    brew() {
        console.log('good stuff coming your way')
    }

}

let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 400)