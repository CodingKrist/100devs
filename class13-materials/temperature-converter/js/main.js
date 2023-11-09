//Write your pseduo code first! 


//Utilidad al hacer click en el botón
document.querySelector('#convert').addEventListener('click', conversion)

//Obtener el valor
let cels = document.querySelector('#celsius').value


//Mostrar en la página

function conversion() {
    cels = cels * 9/5 + 32
    document.querySelector('#placeToSee').innerText = cels
}