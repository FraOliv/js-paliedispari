//Palidroma
//Chiedere all’utente di inserire una parola

//Creare una funzione per capire se la parola inserita è palindroma

var CheckPalindromo = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' is palindrome.');
    }
    else {
        alert(string + ' is not palindrome.');
    }
}

CheckPalindromo()

document.getElementById('form_id').onsubmit = function() {
   CheckPalindromo(document.getElementById('your_input').value);
    return false;
}