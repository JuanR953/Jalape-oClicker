let clicks=0
let clicksAñadidos=1
let i=0;
const jalapeño = document.getElementById("Jalapeño")
const texto = document.getElementById("textoJalapeño")
let intervalo;
let x=0;

function contarClicks() {
    clicks+=clicksAñadidos
    textoJalapeño.innerHTML = "Llevas " + clicks + " jalapeños."
    verificarVictoria()
    document.getElementById("p").innerHTML = "Llevas " + clicks + " jalapeños."
    verificarLogros()
}
function comprarClicks(clicka, precio) {
    if (clicks>=precio) {
        clicks-=precio
        clicksAñadidos+=clicka
        textoJalapeño.innerHTML = "Llevas " + clicks + " jalapeños."
    }
    else {
        textoJalapeño.innerHTML = "Llevas " + clicks + " jalapeños."
        alert("Llevas " + clicks + " jalapeños. No tienes suficiente.")
    }
}
function mostrarTienda() {
    if (i%2==0) {
        document.getElementById("tienda").style.display="block"
        document.getElementById("main").style.display="none"
        i++
        document.getElementById("porPeticionDeJustinho").innerHTML = 'Volver'

    }
    else {
        document.getElementById("main").style.display="block"
        document.getElementById("tienda").style.display="none"
        i++
        document.getElementById("porPeticionDeJustinho").innerHTML = 'Tienda'
    }
    verificarVictoria()
}
function comprarSkin(foto, precio) {
    if (clicks>=precio) {
        clicks-=precio
        document.getElementById("Jalapeño").src = foto
        textoJalapeño.innerHTML = "Llevas " + clicks + " jalapeños."
    }
}
function verificarVictoria() {
    console.log(clicks);
    if (clicks >=1000000) {
        document.getElementById('main').style.display = "none";
        document.getElementById('pantallaVictoria').style.display = 'flex';
    }
}
function iniciarClics(precio, tiempo) {
    if (clicks>=precio) {
        if (!intervalo) {
            intervalo = setInterval(() => {
                document.getElementById("clickeaAqui").click();
            }, tiempo);
        }
        clicks-=precio;
    }
    else {
        alert("Llevas " + clicks + " jalapeños. No tienes suficiente.")
    }
}
function hola() {
    if (i%2==0) {
        document.getElementById("logros").style.display="block"
        document.getElementById("main").style.display="none"
        i++
    }
    else {
        document.getElementById("main").style.display="block"
        document.getElementById("logros").style.display="none"
        i++

    }
    verificarVictoria()
}
function verificarClick(c, i, mensaje, numero, golazo) {
    if (clicks >= c && x < numero)  {
            setTimeout(()=> {
                alert(mensaje);}, 1)
            clicks+=i;
            x++
            document.getElementById(golazo).style.background = "linear-gradient(to right, gold, rgb(247, 247, 157), gold"; 
    }
}
function verificarLogros() {
    verificarClick(1, 0, "Obtuviste tu primer click.", 1, "a");
    verificarClick(1000, 100, "Obtuviste mil clicks.", 2, "b");
    verificarClick(5000, 500, "Obtuviste cinco mil clicks.", 3, "c");
    verificarClick(10000, 1000, "Obtuviste diez mil clicks.", 4, "d");
    verificarClick(50000, 5000, "Obtuviste cincuenta mil clicks.", 5, "e");
    verificarClick(100000, 10000, "Obtuviste cien mil clicks.", 6, "f");
}