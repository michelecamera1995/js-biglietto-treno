console.log("js-ok")

// Dati utente

const nome = prompt('Inserisci nome');

const km = prompt('km da percorrere');

const eta = prompt('Inserisci età');

// Calcolo prezzo biglietto

const prezzo = Number(200 * 0.21);

const prezzo18 = Number(42 - 8.4);

const prezzo65 = Number(42 - 16.8);

// Calcolo sconto prezzo biglietto

if (eta <= 18) {             // età minore 18
    document.getElementById("prezzo").innerHTML = prezzo18;
    console.log("sono entrato nell'if età minori 18");
} else if (eta >= 65) {   // età maggiore di 65
    document.getElementById("prezzo").innerHTML = prezzo65;
    console.log("sono entrato nell'if età maggiore 65");
} else {                        // età non scontata
    document.getElementById("prezzo").innerHTML = prezzo;
    console.log("sono entrato nell'if");
}

// Visual

document.getElementById("nome").innerHTML = nome;

document.getElementById("età").innerHTML = eta;

document.getElementById("km").innerHTML = km;


