const cadastro = [{
    Email: "vitor@meuemail.com",
    senha: "senhapossivel"
}, {
    Email: "testmail1@meuemail.com",
    senha: "senhadaqui"
}, {
    Email: "testmail2@meuemail.com",
    senha: "senhadela"
}, {
    Email: "testmail3@meuemail.com",
    senha: "senhadeca"
}]

for(i = 0; i < cadastro.length; i++){
    console.log(`O email: ${cadastro[i].Email} possui a senha: ${cadastro[i].senha}`)
}