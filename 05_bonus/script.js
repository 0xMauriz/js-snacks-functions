/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.


const welcomeUser = (userName) => {

    const now = new Date();

    const hourNow = now.getHours();

    if (hourNow <= 13) {
        console.log('buongiorno' + ' ' + userName);
    }

    if (hourNow > 13 && hourNow <= 17) {
        console.log('buon pomeriggio' + ' ' + userName);
    }

    if (hourNow > 17) {
        console.log('buonasera' + ' ' + userName);
    }
}



// Invoca la funzione qui e stampa il risultato in console

welcomeUser(name);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.