
let deckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deckId = data.deck_id
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', checkDraw)

function checkDraw() {
  if (numberOfCards === 2) {
    drawTwo()
  } else if (numberOfCards === 4) {
    war()
  }
}

let numberOfCards = 2

function drawTwo(){
    const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCards}`

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
        document.querySelector('#player11').src = ''
        document.querySelector('#player22').src = ''

        let player1Value = convertToNum(data.cards[0].value)
        let player2Value = convertToNum(data.cards[1].value)

        if ( player1Value > player2Value ) {
          document.querySelector('h3').innerText = 'Player 1 Wins'
        } else if ( player1Value < player2Value) {
          document.querySelector('h3').innerText = 'Player 2 Wins'
        } else {
          document.querySelector('h3').innerText = 'Time for WAR'
          numberOfCards = 4
        }

      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}

function war(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCards}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player11').src = data.cards[1].image
      document.querySelector('#player2').src = data.cards[2].image
      document.querySelector('#player22').src = data.cards[3].image

      let player1Value = convertToNum(data.cards[0].value) + convertToNum(data.cards[1].value)
      let player2Value = convertToNum(data.cards[2].value) + convertToNum(data.cards[3].value)

      if ( player1Value > player2Value ) {
        document.querySelector('h3').innerText = 'Player 1 Wins'
        numberOfCards = 2
      } else if ( player1Value < player2Value) {
        document.querySelector('h3').innerText = 'Player 2 Wins'
        numberOfCards = 2
      } else {
        document.querySelector('h3').innerText = 'Time for WAR'
        numberOfCards = 4
      }

    })

    .catch(err => {
        console.log(`error ${err}`)
    });
}


function convertToNum(val) {
  if (val === 'ACE') {
    return 14
  } else if(val === 'KING') {
    return 13
  } else if( val === 'QUEEN') {
    return 12
  } else if(val === 'JACK' ) {
    return 11
  } else {
    return Number(val)
  }
} 