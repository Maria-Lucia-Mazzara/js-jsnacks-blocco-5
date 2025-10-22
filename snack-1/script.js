const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// ciclo for classico

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);
}

// soluzione forEach

names.forEach((name) => {
  console.log(name);
});
