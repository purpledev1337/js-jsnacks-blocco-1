// const numeriDispari = [];
// const numeriUtente = [];

// do {
//     let numScelto = parseInt(prompt("Inserisci un numero"));
//     numeriUtente.push(numScelto);
//     if (numScelto % 2 != 0) {
//         numeriDispari.push(numScelto);
//     }
// } while (numeriUtente.length < 6);
// console.log("I numeri inseriti sono: ", numeriUtente);
// console.log(numeriDispari);


// 5 - Crea un array vuoto.
const numeriDispari = [];

// Chiedi per 6 volte all’utente di inserire un numero,
for (let i= 0; i < 6; i++) {
    let numScelto = parseInt(prompt("Inserisci un numero"));
    // se è dispari inseriscilo nell’array.
    if (numScelto % 2 !== 0 && !isNaN(numScelto)) {
        numeriDispari.push(numScelto);
    }
}
console.log("I numeri dispari inseriti dall'utente sono: ", numeriDispari);
