console.log("JS OK");
let utente = prompt('Scegli pari o dispari');
let numero = parseInt(prompt('Inserisci un numero da 1 a 5:'));

//FUNZIONI
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pariODispari(pari_dispari) {
  if(pari_dispari % 2 === 0){
      return "pari";
  }else{
      return "dispari";
  }
}

let computer = random(1, 5);
let sommaTot = computer + numero;
let risultato = pariODispari(sommaTot);
console.log('computer: ', computer);
console.log('utente ', numero)


if((risultato === 'pari' && utente === 'pari') || (utente === 'dispari' && risultato === 'dispari')){
  document.getElementById("result_dice").innerHTML = ("non so se ti interessava della parola palindroma ma a dadi hai vinto &#128530;");
    console.log("Hai vinto!");
}else{
    document.getElementById("result_dice").innerHTML = ("e comunque a dadi hai perso. &#128513;");
    console.log("Hai perso =(");
}