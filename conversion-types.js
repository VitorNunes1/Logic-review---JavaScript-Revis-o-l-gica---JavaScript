let n1 = 10;
let n2 = "2";

console.log(n1 * n2, typeof n1, typeof n2);
console.log(n1 + n2, typeof n1, typeof n2); //The "+" will only serve for string junction
console.log(n1 - n2, typeof n1, typeof n2);

//Preferably, always use non-string numbers

let convert1 = "10.999999999"; //will discard the other decimals, as it serves for a whole number (with parseInt)
//let convert1 = "wefewf10.999999999"; Not a Number
convert1 = parseInt(convert1);
//String to number with parseInt

let convert2 = "10.999999999wad"; //will consider the decimals with parseFloat
convert2 = parseFloat(convert2);
//String to number with parseFloat

console.log(convert1, convert2);

//convert1 = number(convert1) //It will only work on string only with number

//-------------------------------------------------------------------------------------------------------------------

//decimals 0 - 9
//hexadecimal 0 - f (f equals 15 for example)


n2 = 11;
n2 = n2.toString(16);
console.log(n2, typeof n2);

//To binary number

n2 = 15;
n2 = n2.toString(2);
console.log(n2, typeof n2);

