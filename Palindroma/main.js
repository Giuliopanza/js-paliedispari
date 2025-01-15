/*
Palindroma Chiedere all’utente di inserire una parola ,
Creare una funzione per capire se la parola inserita è palindroma
 */

let parola = prompt("Dammi una parola") ;

let revparola = "" ;

reverse(parola)

function reverse(a) {

    for ( let i = a.length - 1; i >= 0; i-- )  {

        revparola += a.charAt(i);

    }

    if (parola == revparola) {

        console.log(`La tua parola è Palindroma`)
        
    } else {
        
        console.log(`La tua parola non è Palindroma`)

    } 
    
}