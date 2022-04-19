/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

console.log("Hello World");


const firstWord = prompt ('Inserisci una parola');
const secondWord = prompt ('Inserisci un altra parola');

console.log(firstWord, secondWord);

const firstWordOutput = (`La parola inserita contiene ${firstWord.length} lettere`);
const secondWordOutput = (`La parola inserita contiene ${secondWord.length} lettere`);

console.log(firstWordOutput, secondWordOutput);

const firstWrittenWord = document.querySelector('.first-word');
const secondWrittenWord = document.querySelector('.second-word');


if (firstWord > secondWord) {
  document.querySelector('.winner-word').innerHTML = `La parola più corta è "${secondWord}" contiene ${secondWord.length} lettere`;
  document.querySelector('.loser-word').innerHTML = `La parola più lunga è "${firstWord}" contiene ${secondWord.length} lettere`;
}

else if(firstWord < secondWord) {
  document.querySelector('.winner-word').innerHTML = `La parola più corta è "${firstWord}"  contiene ${firstWord.length} lettere`;
  document.querySelector('.loser-word').innerHTML = `La parola più lunga è "${secondWord}" contiene ${secondWord.length} lettere`;
}

else {
  document.querySelector('.equal-word').innerHTML = `sia ${firstWord} che ${secondWord} hanno lo stesso numero di lettere:${firstWord.length} e 
  ${secondWord.length}`;
};