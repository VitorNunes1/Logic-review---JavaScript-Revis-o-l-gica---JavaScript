//Criar um array com números randomicos não repetidos
function generateRandomNumber(max){
    return parseInt(Math.random() * max)
}

let arr = []
while(arr.length <= 20){
    let randomNumber = generateRandomNumber(30)

    if (arr.indexOf(randomNumber) < 0){
        arr.push(randomNumber)
    } else {
        console.log(randomNumber, "Já existe no Array")
    }
    console.log(randomNumber)
}
