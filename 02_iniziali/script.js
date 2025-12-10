/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.

const firstCharOnly = (arrayOfNames) => {

    let arrayFirstChar = [];

    for (let i = 0; i < arrayOfNames.length; i++) {
        arrayFirstChar += arrayOfNames[i][0] + "," + " ";
    }

    console.log(arrayFirstChar);
}


// Invoca la funzione qui e stampa il risultato in console


firstCharOnly(names);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]