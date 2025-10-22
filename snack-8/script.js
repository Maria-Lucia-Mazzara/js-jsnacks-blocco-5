const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// metodo ciclo for 

// let classe_trovata = ''; 


// for (let i = 0; i < students.length; i++) {
//   const studente = students[i]; 

//   if (studente.name === 'Marco Lanci') { 
//     classe_trovata = studente.class; 
//   }
// }

// console.log(classe_trovata);

// metodo forEach

// let classe_trovata = ''; 


// students.forEach((studente) => {
//   if (studente.name === 'Marco Lanci') {
//     classe_trovata = studente.class;
//   }
// });

// console.log(classe_trovata);

// metodo find
const studente_trovato = students.find((studente) => {
  return studente.name === 'Marco Lanci';
});

console.log(studente_trovato.class);

