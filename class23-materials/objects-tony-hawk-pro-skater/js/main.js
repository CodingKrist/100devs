//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods


function TonyHawkCharacter(nameCharacter, speed, hability, catchPhrase) {

    this.name = nameCharacter
    this.speed = speed
    this.hability = hability
    this.phrase = catchPhrase
    
    this.jump = function() {
        console.log("Boing!")
    }
    
    this.record = function() {
        console.log("you beat the record!")
    }

    this.taunt = function() {
        console.log(`do not make me do my ${this.hability}`)
    }
}

let kristMartin =  new TonyHawkCharacter("Krist", 25, "hiper jump", "OMG I KJAHKJS")