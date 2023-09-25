console.log(sum(x,y,z))

function sum(...numbers) {
    let total = 0
    for(let number of numbers){
        total += number
    }
    return total
}