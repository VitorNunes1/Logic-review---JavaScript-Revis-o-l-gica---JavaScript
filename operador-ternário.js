let idade = 21;
let paisPresentes = false; 
//let paisPresentes = false;  Irá dar True se idade for 18
let comprouBilhete = true;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);


//Simples mudança de String
/*let msgMaiorIdade = ``
if(idade >= 18){
    msgMaiorIdade = `É maior que 18 anos.`
} else {
    msgMaiorIdade = `É menor de 18 anos.`
}*/

//Com operador ternário           Se a primeira for true, será armazenada na variável, senão, a segunda opção.
let msgMaiorIdade = (idade >=18) ? `É maior que 18 anos.` : `É menor de 18 anos.`
 
if(!comprouBilhete){  //Se não comprou bilhete, logo:
    console.log("Não comprou o bilhete.")
} else {
    if (idade >= 18){
        console.log("É maior de idade, pode viajar.")
    } else {
        console.log("É menor de idade, não pode viajar.")
    }
}

