/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
let nameOfUser;


// Dichiara la funzione qui.

let saluto = (nameOfUser) => console.log('Ciao' + ' ' + nameOfUser);

// Invoca la funzione qui e stampa il risultato in console

saluto(userName);

//Risultato atteso se si passa 'Mario': // ciao Mario
