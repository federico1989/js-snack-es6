// Crea un array vuoto.
const numbers = [];
// Chiedi per 6 volte all’utente di inserire un numero,

const evenOdd = x => {
  for (let i = 0; i < x; i++) {
    const myNumbers = Number(prompt("Inserisci il numero"));
    if (myNumbers % 2 !== 0) {
      numbers.push(myNumbers);
    }
  }
  return numbers
}
console.log(evenOdd(6));
