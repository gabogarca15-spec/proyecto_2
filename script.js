const pilotos = {
    valentino: {
        src:    "img/valentino.jpg",
        nombre: "Valentino Rossi",
        desc:   "El Doctor. 9 veces campeón del mundo, considerado el piloto más grande de la historia del motociclismo."
    },
    marc: {
        src:    "img/marc.jpeg",
        nombre: "Marc Márquez",
        desc:   "El Pulpo de Cervera. 8 veces campeón del mundo, famoso por su estilo agresivo e increíbles salvadas."
    },
    lorenzo: {
        src:    "img/lorenzo.jpg",
        nombre: "Jorge Lorenzo",
        desc:   "El Perfeccionista. 5 veces campeón del mundo, reconocido por su pilotaje suave y técnico."
    },
    garcia: {
        src:    "img/garcia.jpg",
        nombre: "Néstor García",
        desc:   "Piloto prometedor del campeonato, representando con orgullo a su país en la parrilla internacional."
    }
};


const visorImagen  = document.getElementById("visorImagen");
const nombrePiloto = document.getElementById("nombrePiloto");
const descPiloto   = document.getElementById("descPiloto");
const infoPiloto   = document.getElementById("infoPiloto");

window.addEventListener("DOMContentLoaded", function () {
    const primerBoton = document.querySelector(".contenedor-botones button");
    const primeraKey  = primerBoton.getAttribute("onclick").match(/'(\w+)'/)[1];
    cargarPiloto(primeraKey);
    primerBoton.classList.add("activo");
});

function cambiarPiloto(clave, boton) {
    
    if (boton.classList.contains("activo")) return;

    
    visorImagen.style.opacity = "0";
    infoPiloto.style.opacity  = "0";

    setTimeout(function () {
        cargarPiloto(clave);
       
        visorImagen.style.opacity = "1";
        infoPiloto.style.opacity  = "1";
    }, 350);


    document.querySelectorAll(".contenedor-botones button").forEach(function (btn) {
        btn.classList.remove("activo");
    });
    boton.classList.add("activo");
}

function cargarPiloto(clave) {
    const piloto         = pilotos[clave];
    visorImagen.src      = piloto.src;
    nombrePiloto.textContent = piloto.nombre;
    descPiloto.textContent   = piloto.desc;
}