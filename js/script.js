// RACCOLGO LE INFORMAZIONI 
// Richiesta nome
const userName = prompt("Ciao, qual'è il tuo nome?");
// Richiesta cognome 
const userLastName = prompt('Il tuo cognome?');
// Richiesta colore preferito
const userColor = prompt('Il tuo colore preferito?');
// PRENDO LE INFORMAZIONI E GENERO LA PASSWORD
const password = `${userName}${userLastName}${userColor}23`;

const userMessage ='La tua nuova password è: ' + password;
// STAMPO IL RISULTATO SU HTML
document.getElementById('password-text').innerHTML = userMessage;
