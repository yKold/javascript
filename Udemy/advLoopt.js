// for of  || iterating - arrays, strings

const basket = ["apples", "oranges","bananas"]
for(item of basket){
    console.log(item)
}

// for in  || enumerating - objects

const detailedBasket = {
    apples: 5,
    oranges: 10,
    bananas: 1000
}
for(item in detailedBasket){
    console.log(item)
}