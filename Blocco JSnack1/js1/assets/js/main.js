// L’utente inserisce due numeri in successione  , con due prompt
// var primoNumero = prompt("Inserisci il primo numero");
// var secondoNumero = prompt("Inserisci il secondo numero");
// Il software stampa il maggiore.



let primoNumero = Number(prompt("Inserisci il primo numero"));
let secondoNumero = Number(prompt("Inserisci il secondo"));

const major = (x , y) => {
  if (x === y) {
    return "Stesso numero"
  } else if (x > y) {
    return x
  } else {
    return y
  }
}

console.log(major(primoNumero, secondoNumero));
