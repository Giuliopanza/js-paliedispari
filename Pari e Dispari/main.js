/*
Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.
 */

let scelta = prompt("Scrivi la tua scelta pari o dispari") ;

let numero = parseInt( prompt("scrivi un numero da 1 a 5") ) ;

sfida (numero, scelta)

function sfida (x, a){

    let random = Math.floor(Math.random() * 5) + 1;

    console.log(`Il numero del computer è: ${random}`)

    let somma = random + x;
    
    console.log(`La somma è: ${somma}`)

    if (somma % 2 == 0 && a == "pari") {

        console.log(`Hai vinto!`)
        
    } else if (somma % 2 !== 0 && a == "dispari") {

        console.log(`Hai vinto!`)
        
    } else {

        console.log(`Hai perso :(`)
        
    } 

}