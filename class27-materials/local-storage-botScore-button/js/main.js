//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')) { // si ponemos if(localStorage.getItem('botScore')) 
  localStorage.setItem('botScore', 0)                                      // obtenemos null si no hay nada guardado en botScore. null por tanto es false.
                                        // por ello necesitamos indicar !localStorage....
                                        // Basicamente estoy indicando que si NO HAY botScore (no hemos entrado con anterioridad)
}                                       // añada un botScore con valor 0


document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
  let botScoreValue = Number(localStorage.getItem('botScore'))
  botScoreValue += 1
  localStorage.setItem('botScore', botScoreValue)
  document.querySelector('h3').innerText = Number(localStorage.getItem('botScore'))
}

document.querySelector('h3').innerText = Number(localStorage.getItem('botScore'))
