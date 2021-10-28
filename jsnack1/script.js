// 1 - L’utente inserisce due numeri in successione, con due prompt.
const firstNum = parseInt(prompt("Inserisci il primo numero"));
const secondNum = parseInt(prompt("Inserisci il secondo numero"));

console.log("Il primo numero scelto è: ", firstNum);
console.log("Il secondo numero scelto è: ", secondNum);

// Il software stampa il maggiore.
let maxNum;
if (firstNum > secondNum) {
    maxNum = firstNum;
} else {
    maxNum = secondNum;   
}

console.log("Il numero maggiore è: ", maxNum);