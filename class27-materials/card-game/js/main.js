
let deckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://www.deckofcardsapi.com/api/deck/cbzbrde5c25t/draw/?count=2'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        } else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').classList.add('hidden')
        }
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

