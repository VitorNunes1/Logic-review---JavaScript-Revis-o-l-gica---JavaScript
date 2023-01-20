const arr = new Array()
console.log(typeof arr)
const arr2 = new Array(true, "Vitor", 17, new Array(2, 4, 10))
arr2[0] = "Vitor"
arr2[1] = 40
console.log(arr2)
console.log(arr2[3][arr2[3].length - 1]) //length irá contar quantos itens contém dentro do Array

//ou de forma literal

const arr3 = ["Vitor", 40, [3,6,9], true]
console.log(arr3)
console.log(arr3[2])
console.log(arr3[2][0]) //O segundo colchete irá buscar o objeto dentro do segundo colchete

arr3[4] = "Trocar valor"
console.log(arr3)

arr3[arr3.length] = "Novo valor =D"
console.log(arr3)
arr3.push("Novo valor com push =D", "a", "b", 2)
console.log(arr3)

let n = 6
console.log(arr3[n])