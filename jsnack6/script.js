// 6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.

let randomNumbers = [];
// ciclo while per creare 50 numeri random fino a che l'array è < 50
while (randomNumbers.length < 50) {
    let numRandom = Math.floor(Math.random() * 150);
    // ciclo for per scorrere l'array principale in cerca di un numero uguale a quello generato random
    let duplicateNumber = false;
    for (let i = 0; i < 50; i++){
        if (randomNumbers[i] == numRandom){
            duplicateNumber = true;
            console.log("Il numero -", numRandom, "- è già nella lista. Ne creo un altro!");
        }
    }
    if (!duplicateNumber){
        randomNumbers.push(numRandom);
        // console.log("Inserisco nella lista il", numRandom);
        }

}

console.log("La lista di numeri diversi è: ", randomNumbers);

