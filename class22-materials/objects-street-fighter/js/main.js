//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeSTCharacter(characterName, characterPunch, catchPhrase, specialMove) {
    this.name = characterName
    this.puch = characterPunch
    this.phrase = catchPhrase
    this.special = specialMove

    this.winning = function() {
        console.log(`HAHAHA ${this.phrase}`)
    }
    this.dash = function() {
        console.log('Oops you missed me!')
    }
    this.taunt = function() {
        console.log(`You cannot handle my ${this.special}`)
    }

}

let ryu = new MakeSTCharacter('Ryu', 'High', 'Get over here!!', 'HAYOOOUUKEENN!!')