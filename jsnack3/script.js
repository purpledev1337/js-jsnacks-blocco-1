// 3 - Il software deve chiedere per 10 volte all’utente di inserire un numero.
const listaNumeri = [];
let numScelto;
let sommaNumeri = 0;

do {
    numScelto = parseInt(prompt(`Inserisci un numero. [${listaNumeri.length+1}/10]`));
    listaNumeri.push(numScelto);
    console.log("Numero scelto: ", numScelto);
    sommaNumeri += numScelto;
    console.log("La somma parziale è: ", sommaNumeri);
} while (listaNumeri.length < 10);

console.log("La lista contiene", listaNumeri.length, "numeri, ed i numeri inseriti sono: ", listaNumeri);
console.log("La somma di tutti i numeri inseriti è: ", sommaNumeri);


// Il programma stampa la somma di tutti i numeri inseriti.
