const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.


// //  metodo ciclo for 
// const zucchine_lunghe = [];
// const zucchine_corte = [];

// for (let i = 0; i < zucchine.length; i++) {
//   const zucchina = zucchine[i];

//   if (zucchina.length >= 15) {
//     zucchine_lunghe.push(zucchina); 
//   } else {
//     zucchine_corte.push(zucchina); 
//   }
// }
// console.log(`Zucchine lunghe: ${zucchine_lunghe}`);
// console.log(`Zucchine corte: ${zucchine_corte}`);

// metodo forEach
// const zucchine_lunghe = [];
// const zucchine_corte = [];

// zucchine.forEach((zucchina) => {
//   if (zucchina.length >= 15) {
//     zucchine_lunghe.push(zucchina);
//   } else {
//     zucchine_corte.push(zucchina);
//   }
// });
// console.log(zucchine_lunghe);
// console.log(zucchine_corte);

// metodo filter 
const zucchine_lunghe = zucchine.filter((zucchina) => {
  return zucchina.length >= 15; // tengo solo quelle lunghe almeno 15 cm
});

const zucchine_corte = zucchine.filter((zucchina) => {
  return zucchina.length < 15; // tengo solo le altre
});

console.log(zucchine_lunghe);
console.log(zucchine_corte);
