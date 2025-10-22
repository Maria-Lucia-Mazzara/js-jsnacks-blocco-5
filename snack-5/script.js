const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// const numeri_pari = [];

// // metodo ciclo for 
// for (let i = 0; i < nums.length; i++) {
//     const number = nums[i];

//     if (number % 2 === 0) {
//         numeri_pari.push(number)
//     }

// }
// console.log(numeri_pari);

// const numeri_pari = [];
// //  metodo forEach

// nums.forEach((number) => {
//     if (number % 2 === 0) {
//         numeri_pari.push(number);
//     }
// });

// console.log(numeri_pari); 

// versione con filter perchè devo scorrere ogni elemento dell'array per tenere in considerazione solo i pari 
// quindi voglio restituiti  solo i valori che verificano una data condizione

const numeri_pari = nums.filter((number) => {
    if(number % 2 === 0){
        return true
    }
    return false 
});
console.log(numeri_pari); 
