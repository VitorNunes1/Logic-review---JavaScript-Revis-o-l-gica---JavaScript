const nomes = ["Daniel", "Maria", ""]
const pessoa = {nome: "", idade: 10, email: ""}
const pessoa1 = {}

const pessoas = [{ 
    nome: "Vitor",
    idade: 17
}, {
nome: "Maria",
idade: 28
}, {
nome: "Helena",
idade: 40
}, {
nome: "João",
idade: 18
}]

for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos.`)
}
