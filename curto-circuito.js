//Basicamente utilizar os operadores lógicos de forma mais elegante

/*let n = 0;
if(!n){
    n = 10
}*/
let n = 0; //ou 1
n = n || 10;

console.log(n)

let isValid = true
/*if(isValid){
    console.log("É válido.")
}*/

isValid && console.log(`É válido.`);

isValid || console.log(`Não é válido.`);