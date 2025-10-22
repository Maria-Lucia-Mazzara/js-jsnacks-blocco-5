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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }




// // metodo ciclo for
// let studente_trovato = '';

// for (let i = 0; i < students.length; i++) {
//   const studente = students[i]; 
//   if (studente.id === 2) { 
//     studente_trovato = studente; 
//   }
// }
// console.log(studente_trovato);


// metodo forEach
let studente_trovato = '';

students.forEach((studente) => {
  if (studente.id === 2) {
    studente_trovato = studente;
  }
});

console.log(studente_trovato);




