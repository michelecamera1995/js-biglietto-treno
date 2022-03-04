console.log("js-ok")

// Dati utente

const nome = prompt('Inserisci nome');

const km = prompt('km da percorrere');

const età = prompt('Inserisci età');

// Calcolo prezzo biglietto

const prezzo = Number(200 * 0.21);

const prezzo18 = Number(42 - 8.4);

const prezzo65 = Number(42 - 16.8);


if (età <= 18) {
    document.getElementById("prezzo").innerHTML = prezzo18;
}

if (età >= 65) {
    document.getElementById("prezzo").innerHTML = prezzo65;
}

// Calcolo sconto prezzo biglietto

document.getElementById("nome").innerHTML = nome;

document.getElementById("età").innerHTML = età;

document.getElementById("km").innerHTML = km;

document.getElementById("prezzo").innerHTML = prezzo;
