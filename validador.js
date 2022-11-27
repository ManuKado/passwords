const validador = (password) => {
    let cantidadMayusculas = 0
    let cantidadMinusculas = 0
    let cantidadNumeros = 0
    let cantidadCaracteresEspeciales = 0
    let passwordArray = password.split("")

    passwordArray.map(e => {
        if (e === e.toUpperCase() && isNaN(e) === true){
            cantidadMayusculas++
        }
        if (e === e.toLowerCase() && isNaN(e) === true) {
            cantidadMinusculas++

        }
        if (isNaN(e) === false) {
            cantidadNumeros++
        }
        if(e.charCodeAt(0) >= 33 && e.charCodeAt(0) <= 47 || e.charCodeAt(0) === 95){
            cantidadCaracteresEspeciales++
        }
    })

    if (password.length < 8) {
        document.getElementById("validadorZona").innerHTML = ``
       document.getElementById("validadorZona").innerHTML += `<div class="box has-text-centered">La contraseña debe contener al menos 8 caracteres</div>`
    }
    if (cantidadMayusculas < 3) {
        document.getElementById("validadorZona").innerHTML = ``
        document.getElementById("validadorZona").innerHTML += `<div class="box has-text-centered">La contraseña debe contener al menos de 3 mayusculas</div>`
    }
    if(cantidadMinusculas < 3){
        document.getElementById("validadorZona").innerHTML = ``
        document.getElementById("validadorZona").innerHTML += `<div class="box has-text-centered">La contraseña debe contener al menos de 3 minusculas</div>`
    }
    if (cantidadNumeros < 2) {
        document.getElementById("validadorZona").innerHTML = ``
        document.getElementById("validadorZona").innerHTML += `<div class="box has-text-centered">La contraseña debe contener al menos de 2 números</div>`
    }
    if(cantidadCaracteresEspeciales < 1){
        document.getElementById("validadorZona").innerHTML = ``
        document.getElementById("validadorZona").innerHTML += `<div class="box has-text-centered">La contraseña debe contener al un caracter especial</div>`
    }
    if (passwordArray.length >= 8 && cantidadMayusculas >= 3 && cantidadMinusculas >= 3 && cantidadNumeros >= 2 && cantidadCaracteresEspeciales >= 1) {
        document.getElementById("validadorZona").innerHTML = ``
        document.getElementById("validadorZona").innerHTML += `<div class="box has-text-centered">La contraseña es segura</div>`
    }
}

