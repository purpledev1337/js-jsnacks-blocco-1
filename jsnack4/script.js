// 4 - In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby

const listaInvitati = ["andrea", "mario", "giacomo", "roberto", "filippo"];

// chiedi all’utente il suo nome

const nomeUtente = prompt("Inserisci il tuo nome");
console.log("Il tuo nome è: ", nomeUtente);


let invitato = false;

// scorro dentro la listaInvitati ed assegno true ad invitato se il nome è uguale ad uno nella lista
for (let i = 0; i < listaInvitati.length; i++) {
    if (nomeUtente === listaInvitati[i]) {
        invitato = true;
    }
};

// comunicagli se può partecipare o no alla festa.
if (invitato) {
    console.log("Complimenti! Puoi partecipare alla festa!");
} else {
    console.log("Mi dispiace, non puoi partecipare alla festa!");
};