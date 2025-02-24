/**
    * [crear una cookie en php ¿es visible en javascript?]*/

/** crear 1 cookie con la fecha de hoy, expira en 3 días.*/
let limiteEnSegundos = 60 * 60 * 24 * 90;

document.cookie = `fecha=29/01/2024; max-age=${limiteEnSegundos}; SameSite=Secure`;

/** Crear otra cookie con el valor de un idioma, expira en un mes (Español, Inglés).*/

document.cookie= "idioma=es;"+new Date()+"max-age=(60 * 60 * 24 * 90)";
document.cookie = "idioma=es";
document.cookie = "fecha=15"
document.cookie = "alto=15,ancho=24";

/** Al iniciar la página lee el valor de la cookie. Si es español página "es", si no "en".*/

let x = document.cookie;

console.log(document.cookie);


window.onload = function () {
    for (let i of document.getElementsByTagName("button")) {
        i.addEventListener("click", generaCookie);
    }
}

function generaCookie() {
    idioma = this.getAttribute("class");
    document.cookie=(`"idioma=${idioma}"`);
    console.log(document.cookie);
}

/** mostrar la fecha de la cookie */

document.cookie.split(";");
console.log(document.cookie[3]);