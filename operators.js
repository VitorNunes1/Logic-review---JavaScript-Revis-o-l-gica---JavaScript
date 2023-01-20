// Adição +
// Subtração -
// Multiplicação *
// Divisão /
// Resto da divisão % "Caso o número não seja múltiplo"
// Potência **

let n1 = 10
let n2 = 5

//  Operadores Aritméticos
console.log("Operadores Aritméticos");

console.log("Soma:", n1 + "+" + n2 + "=", n1 + n2)
console.log("Subtração:", n1 + "-" + n2 + "=", n1 - n2)
console.log("Multiplicação:", n1 + "*" + n2 + "=", n1 * n2)
console.log("Divisão:", n1 + "/" + n2 + "=", n1 / n2)
console.log("Resto do número não múltiplo:", n1 + "%" + n2 + "=", n1 % n2)
console.log("Potência:", n1 + "**" + n2 + "=", n1 ** n2)
console.log(" ");

// Operadores de atribuição
console.log("Operadores de atribuição");
// O "n3" está atribuido à "20" com o "=".
let n3 = 20;
n3 = n3 + 5;
n3 += 2;
console.log(n3);
console.log(" ");

//Operadores de incremento e decremento
console.log("Operadores de incremento e decremento");
let i = 0;
i += 1;
//ou
i++;
i--;
console.log(i);
console.log(" ");

//Operadores de comparação
console.log("Operadores de comparação");
/*
    Igualdade de valor ==
    Igualdade de valor e tipo ===
    <, >, <=, >=
    != valores DIFERENTES
    !== valores e tipos diferentes
*/
console.log(n1, n2, n3);
console.log(n1 == "10");
console.log(n1 <= "10");
console.log(n1 != "10"); //São diferentes "false"
console.log(n1 !== "10"); //São indiferentes "true"