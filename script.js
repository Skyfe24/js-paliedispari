console.log('JS PALINDROME OK');

const entered_word = prompt("Inserisci una parola e ti diremo se è Palindroma: ");
console.log(entered_word)

function palindroma_word(entered_word) {

  //VARIABILE INTERNA ALLA FUNZIONE CON LE PROPRIETA' SPLIT, REVERSE E JOIN 
  let reversed_word = entered_word.split('').reverse().join('');
  
  //RESTITUZIONE DELL'UGUAGLIANZA DELLA PAROLA INSERITA CON QUELLA INVERTITA
  return entered_word === reversed_word;
}


palindroma_word(entered_word);

if (palindroma_word(entered_word)){
  document.getElementById("result_word").innerHTML = ("La parola che hai inserito è Palindroma.") ;
} else {
  document.getElementById("result_word").innerHTML = ("La parola che hai inserito non risulta Palindroma.");
}