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
let comprouBilhete = true;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);


//Simples mudança de String com if e else
/*let msgMaiorIdade = ``
if(idade >= 18){
    msgMaiorIdade = `É maior que 18 anos.`
} else {
    msgMaiorIdade = `É menor de 18 anos.`
}*/

//Com operador ternário           Se a primeira for true, será armazenada na variável, senão, a segunda opção.
let msgMaiorIdade = (idade >=18) ? `É maior que 18 anos.` : `É menor de 18 anos.`;

console.log(msgMaiorIdade);


if(!comprouBilhete){  //Se não comprou bilhete, logo:
    console.log("Não comprou o bilhete.")
} else {
    if (idade >= 18){
        console.log("É maior de idade, pode viajar.")
    } else {
        console.log("É menor de idade, não pode viajar.")
    }
}

//====================================================================

let n1 = 6;
let n2 = 8;
console.log(n1, n2);
let media = (n1 + n2) / 2;
console.log(`Média: ${media}`);

if(n1 === 0 || n2 === 0){
    console.log(`Reprovado.`)
} else if (media < 7) { //else if para colocar condição no "else"
    console.log(`Reprovado, Mas há como recuperar.`)
} else { //Se qualquer uma das anteriores der false, cairá no ultimo else.
    console.log(`Aprovado, parabéns!`)
} 

console.log(`Saiu do bloco if.`)


