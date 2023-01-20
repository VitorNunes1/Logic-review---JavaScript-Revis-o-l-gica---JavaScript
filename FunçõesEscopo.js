let n1 = "global"

function mostraN(){
    let n1 = "n1 local"

    if(true){
        let n1 = "n1 dentro de if com let" //Let não entra pois está ligado ao escopo e já tem um n1 definido fora.
        var n2 = "n2 dentro do if com var" //Var entra pois está ligado à função
    }
    console.log("Valor de n1: " + n1)
    console.log("Valor de n2: " + n2)
}
mostraN()

console.log("Valor do escopo global: " + n1)

//------------------------------------------------------------------------------------------

function fnExt(){

    let n = "n local na função fnExt"

    function fnInt(){
        let n = "n local na função fnInt"
        console.log(n)
    }
    fnInt()
    console.log(n)
}
fnExt()