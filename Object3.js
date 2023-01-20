const produto = {
    nome: "caneta",
    qtd: 10,
    comprar: function(n){
        console.log(this) //O this irá se referir ao produto (ao objeto)
        if(n > this.qtd){
            return "Quantidade não disponível."
        }
        this.qtd -= n 
    },
    test1: function(){
        console.log("test1")
        console.log(this)
    },
    test2: () =>{ //Na arrow function, além da sintaxe diferente, o this será um objeto "Window" por exemplo o (alert) está no objeto window
        console.log("test2 ")
        console.log(this)
    }
}
produto.comprar(3)
//console.log(produto)

produto.comprar(13)
//console.log(produto)

produto.test1()
produto.test2()