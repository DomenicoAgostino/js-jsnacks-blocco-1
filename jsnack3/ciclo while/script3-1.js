/*
  JSnack 3
  Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.
  Esegui questo programma in due versioni, con il for e con il while (facoltativo) 
*/

const output = document.querySelector(".number");

let limit = 5;
let somma = 0;

while(limit > 0){
  const input = parseInt(prompt(`Inserisci il ${5-(limit-1)}° numero da sommare:`));
  somma += input;
  limit--;
}

output.innerHTML = `<h2>Risultato finale (ciclo while):</h2>
                    <h1>${somma}</h1>`;