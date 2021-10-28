// 2- L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

console.log("La prima parola inserita è: ", firstWord);
console.log("La seconda parola inserita è: ", secondWord);

// Il software stampa prima la parola più corta, poi la parola più lunga.

let longWord;
let shortWord;

if (firstWord.length > secondWord.length) {
    longWord = firstWord;
    shortWord = secondWord;
} else {
    longWord = secondWord;
    shortWord = firstWord;
}

console.log("La parola più corta è: ", shortWord);
console.log("La parola più lunga è: ", longWord);
