function revisarQuiz(){
    let count = 0

    var edadElement = document.getElementById("edad")
    var edad = edadElement.options[edadElement.selectedIndex].value
    
    var comidaElement = document.getElementById("comida")
    var comida = comidaElement.options[comidaElement.selectedIndex].value

    var lenguajeElement = document.getElementById("lenguaje")
    var lenguaje = lenguajeElement.options[lenguajeElement.selectedIndex].value

    if(edad === "16"){
        count++
    }

    if(comida === "Tacos"){
        count++
    }

    if(lenguaje === "Python"){
        count++
    }

    alert("Tuviste: " + count + "/3 respuestas correctas.")
}
