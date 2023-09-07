let fruits = ['banana', 'apple', 'orange']

fruits.push('lemon')    //add an element
fruits.pop()            //removes the last element
fruits.unshift('mango') //add element to beginning
fruits.shift()          //removes element from beginning

for(let fruit of fruits){
    console.log(fruit)
}                       //mesma coisa q o 'for' normal, porém mais dinamico

//2d array
let carnes = ['frango', 'peixe', 'rato']
let vegetais = ['couve', 'alface', 'manga']

let mercado = [carnes, fruits, vegetais]

mercado[0][1] = 'pescado' //agora o peixe virou pescado

// spread operator
let num = [1,2,3,4,5,6,7,8,9]
let max = Math.max(...num)
console.log(max)

let num2 = [11,22,33,44,55]
num.push(...num2)
console.log(num)