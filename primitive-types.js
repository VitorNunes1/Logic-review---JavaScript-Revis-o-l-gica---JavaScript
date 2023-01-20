//are types that are passed by value

// strings, number (int, floats), boolean
// undefined, null, symbol (ES2015)

let myvar = "My string";
let myvar2 = "My 'string' with simple quotation marks, not doubles";
console.log(myvar2);
var myvar3 = `my template literal`; 
console.log(myvar3);

let age = 40;
//let msg = "I'm " + age + " years old";
let msg = `I'm ${age} years old`;
console.log(msg);

console.log(typeof msg, typeof age, typeof myvar);


const n1 = 10;
const n2 = 1.1;
console.log(`The type of n1 is ${typeof n1} and your value is ${n1}`);
console.log(`The type of n1 is ${typeof n2} and your value is ${n2}`);

const isValid = true;
console.log(`isValid: ${isValid}`);

let varTest
console.log(varTest);
console.log(typeof varTest);
varTest = null;
console.log(varTest);
console.log(typeof varTest);