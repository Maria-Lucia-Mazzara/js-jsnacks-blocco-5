const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// //  ciclo for classico 

// for (let i = 0; i < posts.length; i++) {
//   const user = posts[i];
//   const author = user.author; // prendo solo il nome della persona
//   console.log(author);
// }

// // versione forEach
// const authors = [];

// posts.forEach((user) => {
//   console.log(user.author);
  
// });
// console.log(authors);

// versione con map 

const autori = posts.map((user) => {
const nome_atori = user.author;
return nome_atori
});
console.log(autori);

