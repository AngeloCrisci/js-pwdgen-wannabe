console.log('JS OK')

// 
/* 
1. Recuperiamo l'elemento d'interesse dal DOM.
2. Chiediamo il nome dell'utente.
3. Chiediamo il cognome dell'utente.
4. Chiediamo il suo colore preferito.
5. Stampiamo in console.
6. Mostriamo in pagina.
*/

// Recupero l'elemento in pagina
const resultElement = document.getElementById('result');
console.log(resultElement);

// 2
const firstName = prompt('Come ti chiami?', 'Angelo' );
console.log(firstName);

// 3
const lastName = prompt('Come fai di cognome?', 'Crisci');
console.log(lastName);

// 4
const favoriteColor = prompt('Quale è il tuo colore preferito?', 'Nero');
console.log(favoriteColor);

// 5
const fullInfo = firstName + lastName + favoriteColor + '21';
console.log(fullInfo);

//Bonus 6 
resultElement.innerText = fullInfo;