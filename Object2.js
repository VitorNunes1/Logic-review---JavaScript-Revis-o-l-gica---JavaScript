const pessoa = {
    nome: "Vitor",
    idade: 17,
    "email": "ele@server.com"
}

console.log(pessoa)

for (let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}