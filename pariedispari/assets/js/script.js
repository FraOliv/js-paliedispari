

//Faccio scegliere all'utente tra "pari e dispari"
var scelta = prompt("scegli tra pari e dispari");

// Faccio scegliere all'utente un numero tra 1 a 5
var numeroUtente = Number(prompt("scegli un numero da 1 a 5"));

//creo una funzione per generare un numero randomico
function numeroRandomico(min, max) {
  var num = Math.floor(Math.random() * 5  ) + 1 ;
  return num;
  }


//Sommiamo i due numeri
//3. Sommiamo i due numeri
var somma = numeroRandomico(1, 5) + numeroUtente;



alert("La somma è: " + somma);
//condizione di vittoria


//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isPari(num) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }



if (isPari(somma)==true) {
  var verdetto = "pari";
} else {
  var verdetto = "dispari";
}

if (verdetto == scelta) {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}



1