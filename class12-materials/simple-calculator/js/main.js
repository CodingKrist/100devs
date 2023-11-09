let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#DominosPizza').addEventListener('click, plusThree')
document.querySelector('zebra').addEventListener('click', nineNine)


function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerHTML = total
}

function plusThree() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerHTML = total
}

function nineNine() {
  document.quierySelector('placeToPutResult').innerHTML = total
}