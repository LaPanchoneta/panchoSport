// crear una variable constante y con texto(2da linea de texto) y hacer como un "print" (3ra linea) - Uziel
//const text= "hola momeros";
//console.log(text) 

// crea una variable constante y integra el texto y una comparacion (6ta linea de texto )- alexis
//console.log("esta pagina es visitada por mas de 50 mil personas por dia, y por mes: ", 50000 * 30);

// creo una variable constante con el contenido new Date() para obtener la fecha y luego hice la variable msg para que siempre que se llame lo haga con un mensaje
//const fecha= new Date();
//const msg= ('ingreso a la pagina: '+ fecha)
//console.log( msg)
//Nacho
//let play = document.getElementById("play")
    //function playAudio(){
        //let audio= new Audio("random.mp3")
        //audio.play()
    //}
    //play.addEventListener("click", playAudio);

//window.open("./ofertas.html"); // abre una ventana emergente al entrar a la pagina web (algunos navegadores la bloquean automaticamente) - uziel


//play.onclick = function() { // al clickear en "botoncito" este usa una animacion que lo cambia gradualmente a color rojo mediante CSS y JS -uziel
    //this.style.backgroundColor = '#C02514';
//};

// -------------------------------------------------------------------------------

// let talle = getElementsByClassName("talle");
// let boton_compra = getElementsByClassName("boton_comprar");

// Obtener elementos por clase
// Obtener elementos por clase
let talles = document.querySelectorAll(".lista_talles .tamaño");
let boton_compra = document.querySelector(".boton_comprar");

// Agregar un evento a cada opción de talle
talles.forEach(function(talle) {
    talle.addEventListener("click", function() {
        // Eliminar la clase activa de todos los talles
        talles.forEach(function(t) {
            t.classList.remove("active");
        });
        // Agregar la clase activa al talle seleccionado
        this.classList.add("active");
        // Actualizar la variable del talle seleccionado
        let talleSeleccionado = this.textContent;
        console.log("Talle seleccionado: " + talleSeleccionado);
    });
});

// Agregar un evento al botón de compra
boton_compra.addEventListener("click", function() {
    // Verificar si se ha seleccionado un talle
    let talleSeleccionadoElemento = document.querySelector(".lista_talles .tamaño.active");
    if (talleSeleccionadoElemento) {
        let talleSeleccionado = talleSeleccionadoElemento.textContent;
        console.log("Comprando talle: " + talleSeleccionado);
        // Proceder con la lógica de compra aquí
    } else {
        alert("Por favor, selecciona un talle antes de comprar.");
    }
});
