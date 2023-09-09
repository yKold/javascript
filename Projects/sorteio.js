
let caixa = []
function randomNums(max){
    let num = Math.floor(Math.random() * max + 1)
    if(!caixa.includes(num)) {
        caixa.push(num)
    } else {
        if(caixa.length < 10){
            return randomNums(max)
        }else {
            console.log('sem numeros')
            return false
        }
    }
}
for(let i = 0; i <= 5; i++){
    randomNums(59)
}
console.log(caixa)
// for(let x = 0; x <= 6; x++){
    //     let numeros = Math.floor(Math.random() * 59 + 1)
    //     if(caixa.includes(numeros)){
    
    //     }
    //     console.log(numeros)
    // }
