function alteraArray(arr){
    arr.push("Adicionado")
}

let arr = ["a"]
console.log(arr)

alteraArray(arr)
console.log(arr)


//--------------------


function alteraPrimitivo(p){ //o p armazena a "mensagem"
    p += "adicionado"
    console.log("dentro da função: " + p)
}
let msg = "mensagem "

console.log(msg)
alteraPrimitivo(msg)
console.log(msg)
