// L’utente inserisce due parole in successione, con due prompt.
let primaParola = prompt("Inserisci la prima parola");
let secondaParola = prompt("Inserisci la seconda parola");

// Il software stampa prima la parola più corta, poi la parola più lunga.


const cortaLunga = (word1, word2) => {
  if (word1.length == word2.length) {
    return "Stessa lunghezza"
  } else if (word1.length < word2.length) {
    return ` ${word1} ${word2} `
  } else {
    return ` ${word2} ${word1} `
  }
}

console.log(cortaLunga(primaParola, secondaParola));
