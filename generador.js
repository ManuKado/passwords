let palabras = ["Llama", "Ciervo", "Jabalí", "Liebre", "Foca", "Cabeza", "Jugos", "imperdible", "Dos", "Naranja", "Tomate", "Saber", "Idioma", "Cuaderno", "Habla"]
let simbolos = [".", "+", "-", "_", "#", "$", "*", "&", "?", "¿", "!", "¡"]

const random = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const encriptarPalabra = (palabraParaencriptar) => {
   palabraEncriptada = palabraParaencriptar.split("").map(e => {
        if(e.toLowerCase() === "a") {
            if(random(0, 1) === 1){
                return "4"
            }
            else{
                return "a"
            }
        }
        if(e.toLowerCase() === "e") {
            if(random(0, 1) === 1){
                return "3"
            }
            else{
                return "e"
            }
        }
        if(e.toLowerCase() === "i") {
            if(random(0, 1) === 1){
                return "¡"
            }
            else{
                return "i"
            }
        }
        if(e.toLowerCase() === "o") {
            if(random(0, 1) === 1){
                return "0"
            }
            else{
                return "o"
            }
        }
        if(e.toLowerCase() === "s") {
            if(random(0, 1) === 1){
                return "$"
            }
            else{
                return "s"
            }
        }
        else if(random(0, 1) === 1){
            return e.toUpperCase()
        }
        else{
            return e
        }
    }).join("")
    return(palabraEncriptada)
}

const generarPasswordAleatoria = () => {
    document.getElementById("zonaGenerar").innerHTML = ``
    document.getElementById("zonaGenerar").innerHTML += `<div class="box has-text-centered">${encriptarPalabra(palabras[random(0,palabras.length - 1)]) + encriptarPalabra(palabras[random(0,palabras.length - 1)]) + String(random(0, 100)) + simbolos[random(0, simbolos.length - 1)]}</div>`
}

const generarPasswordUsuario = (palabra1, palabra2, numero, especial) => {
    document.getElementById("zonaGenerar").innerHTML = ``
    document.getElementById("zonaGenerar").innerHTML += `<div class="box has-text-centered">${encriptarPalabra(palabra1) + encriptarPalabra(palabra2) + numero + especial}</div>`
}