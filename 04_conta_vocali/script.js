/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const howManyVowels = (aString) => {

    let vowelsCounter = 0;

    for (let i = 0; i < aString.length; i++) {
        if (aString[i] === "a" || aString[i] === "A" || aString[i] === "e" ||
            aString[i] === "E" ||aString[i] === "i" || aString[i] === "I" ||
            aString[i] === "o" || aString[i] === "O" || aString[i] === "u" || aString[i] === "U") {

                vowelsCounter++;
            }
    }

    return (vowelsCounter);
}


// Invoca la funzione qui e stampa il risultato in console

let vowelsCount = howManyVowels(word);
console.log(vowelsCount);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)