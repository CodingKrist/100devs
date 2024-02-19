const x = "✯";
const o = "✺";

let estadoJuego = "P1"

const cuadrados = document.querySelectorAll(".square");


cuadrados.forEach((cuadrado, i) => {
    cuadrado.addEventListener("click", () => {
        console.log('cuadrado', i)
        cuadrado.innerText = estadoJuego === "P1" ? x : o;
        estadoJuego = estadoJuego === "P1" ? "P2" : "P1";
        revisarSiHayGanador()
    } )

})

function revisarSiHayGanador() {
    const tablero = Array.from(cuadrados).map(cuadrado => cuadrado.textContent)
    console.log(tablero)


    // Revisar horizontales
    for (let i = 0; i < 3; i += 3) {
        if(tablero[i] === tablero[i+1] && tablero[i] === tablero[i+2]){
            console.log("Ganamos!")
        }
        
    }

}
// Revisar verticales


// Revisar oblicuas