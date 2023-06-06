console.log("JS OK");
const min= 1;
const max= 6;
const random1 = Math.random();
const random2 = Math.random();

const randomUser = Math.floor(random1 * (max + 1 - min)) + min;
console.log('il tuo risultato è ' + randomUser);

const randomCpu = Math.floor(random2 * (max + 1 - min)) + min;
console.log('il risultato del CPU è ' + randomCpu);

if (randomUser > randomCpu)
  console.log('Questa volta sei stato fortunato, hai vinto');
  else 
  console.log('HAI PERSO MALE');

