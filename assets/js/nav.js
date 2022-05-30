function cansee() {
    document.getElementById("nav").style.display = "block";
}

function nocansee() {
    document.getElementById("nav").style.display = "none";
}

function sign() {
    document.getElementById("SIGN").style.display = "block";
    document.getElementById("people").style.opacity = "0.1"
}

function froma() {
    document.getElementById("froma").style.display = "block"
    document.getElementById("fromb").style.display = "none";
}

function fromb() {
    document.getElementById("fromb").style.display = "block"
    document.getElementById("froma").style.display = "none";
}