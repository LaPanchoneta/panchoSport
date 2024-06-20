// crear una variable constante y con texto(2da linea de texto) y hacer como un "print" (3ra linea) - Uziel
const text= "hola momeros";
console.log(text) 

// crea una variable constante y integra el texto y una comparacion (6ta linea de texto )- alexis
console.log("esta pagina es visitada por mas de 50 mil personas por dia, y por mes: ", 50000 * 30);

// creo una variable constante con el contenido new Date() para obtener la fecha y luego hice la variable msg para que siempre que se llame lo haga con un mensaje
const fecha= new Date();
const msg= ('ingreso a la pagina: '+ fecha)
console.log( msg)
//Nacho
let play = document.getElementById("play")
    function playAudio(){
        let audio= new Audio("random.mp3")
        audio.play()
    }
    play.addEventListener("click", playAudio);

window.open("./ofertas.html"); // abre una ventana emergente al entrar a la pagina web (algunos navegadores la bloquean automaticamente) - uziel


play.onclick = function() { // al clickear en "botoncito" este usa una animacion que lo cambia gradualmente a color rojo mediante CSS y JS -uziel
    this.style.backgroundColor = '#C02514';
};