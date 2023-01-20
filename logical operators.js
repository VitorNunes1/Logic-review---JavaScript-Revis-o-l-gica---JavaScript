//                           Tabela verdade
//
// Exp A         Exp B    =     AND(&&)        Or(||)    |    Exp A     =     NOT A (!A)
// true          true     =     true           true      |    true      =     false
// true          false    =     false          true      |    false     =     true
// false         true     =     false          true      |
// false         false    =     false          false     |
//

//Operadores lógicos
/*
    Para viajar ao exterior:
- Ter mais de 18 anos.
ou
- Ir acompanhado com os pais.
E
- Ter comprado o bilhete.
*/

let idade = 21;
let paisPresentes = false; 
//let paisPresentes = false;  Irá dar True se idade for 18
let comprouBilhete = false;

const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete);
console.log(`Pode viajar: ${podeViajar}`);



let n1 = 6;
let n2 = 8;
let media = n1 + (n2/2);
console.log(`Média: ${media}`);

console.log(n1, n2);

console.log(3 * 2 ** 2)
console.log((3 * 2) ** 2)
