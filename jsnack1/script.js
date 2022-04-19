 /*
 JSnack 1
 
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

// PROCEDIMENTO:
// 1. CREARE DUE PROMPT INSERENDO DEI NUMERI IN ENTRAMBI I CASI
// 2. LAVORARE SUGLI "IF, ELSE IF" DICHIARANDO CHE IL SOFTWARE STAMPA IL NUMERO PIU' ALTO



const firstNumber = parseInt(prompt ('Inserisci un numero'));
const secondNumber = parseInt(prompt ('Inserisci un altro numero'));

console.log(firstNumber, secondNumber);

const firstView = document.getElementById('first-number').innerHTML = `The first number is: ${firstNumber}`;
const secondView = document.getElementById('second-number').innerHTML = `The second number is: ${secondNumber}`;

console.log(firstView, secondView);


if (firstNumber > secondNumber) {
  document.querySelector('.win-number').innerHTML = `Vince il numero ${firstNumber}`;
}

else if(firstNumber < secondNumber){
  document.querySelector('.win-number').innerHTML = `Vince il numero ${secondNumber}`;
}

else {
  document.querySelector('.num-draw').innerHTML = `Parità`;
}