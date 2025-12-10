/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const startsWithCharA = (arrayOfNames) => {

    let charSaver = [];

    for (let i = 0; i < arrayOfNames.length; i++) {
        if (arrayOfNames[i][0] === "A") {
            charSaver += arrayOfNames[i] + "," + " ";
        }
    }
    
    console.log(charSaver);
}


// Invoca la funzione qui e stampa il risultato in console

startsWithCharA(names);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]