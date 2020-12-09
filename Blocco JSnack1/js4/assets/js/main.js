// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
const partecipanti = [
  "Gatsby",
  "Carraway",
  "Buchanan",
  "Baker",
  "Wilson"
];

// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const newName = prompt("Inserisci il tuo nome per capire se sei in lista")

const lista = invitato =>{
  if (partecipanti.includes(invitato)) {
    return "Sei in in lista"
  } else {
    return "Non sei in lista"
  }
}
console.log(lista(newName));
