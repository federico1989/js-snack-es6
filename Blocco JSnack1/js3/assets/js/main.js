// Il software deve chiedere per 5 volte all’utente di inserire un numero.


 // Il programma stampa la somma di tutti i numeri inseriti.

 // Esegui questo programma in due versioni, con il for e con il while.

// ****************FOR******************************
// const sum = (x) => {
//   let somma = 0;
//   for (let i = 0; i < x; i++) {
//     let numeroUtente = Number(prompt("Insert number"));
//     somma += numeroUtente;
//   }
//   return somma
// }
//
// console.log(sum(5));
// *****************************************************


// ****************WHILE******************************
const sum = (y) => {
  let somma = 0;
  let counter = 0;
  while ( counter < y ) {
    let numeroUtente = Number(prompt("Insert number"));
     somma += numeroUtente;
     counter++;
  }
     return somma
}
console.log(sum(5));
// *****************************************************
