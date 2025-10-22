const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// //  ciclo for classico 

// for (let i = 0; i < people.length; i++) {
//   const user = people[i];
//   const name = user.name; // prendo solo il nome della persona
//   console.log(name);
// }

// versione forEach

people.forEach((user) => {
  console.log(user.name);
  
});
