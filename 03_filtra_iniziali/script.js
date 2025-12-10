/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const startsWithChar = (arrayOfNames, letter) => {

    let wordsSaver = [];

    for (let i = 0; i < arrayOfNames.length; i++) {
        if (arrayOfNames[i][0] === letter) {
            wordsSaver += arrayOfNames[i] + "," + " ";
        }
    }
    return wordsSaver;
}


// Invoca la funzione qui e stampa il risultato in console

let oneLetter = prompt("Inserisci una lettera per verificare quali parole dell'array iniziano con quest'ultima: ");

let wordsSaver = startsWithChar(names, oneLetter);
console.log(wordsSaver);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]