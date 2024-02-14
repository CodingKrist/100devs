//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){

  const isbn = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${isbn}.json`
  
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if(!localStorage.getItem('books')) { // si books no está en localStorage returna null
          localStorage.setItem('books', data.title)
        }else{
          let books = localStorage.getItem('books') + " ; " + data.title
          localStorage.setItem('books', books) 
        }

        //put title into localStorage
  
        
        document.querySelector('h2').innerText = localStorage.getItem('books')

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



