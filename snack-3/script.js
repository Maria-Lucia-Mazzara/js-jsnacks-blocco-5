const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// const increment = [];

// // ciclo for classico 
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     increment.push(number + 1);
// }
// console.log(increment);

// // forEach
// numbers.forEach((number) => {
// increment.push(number + 1);
// });
// console.log(increment);

// metodo map perchè devo fare un'arraynuova e farmela restituire

const increment = numbers.map( (numero) => {
    return numero + 1;
});
console.log(increment);

