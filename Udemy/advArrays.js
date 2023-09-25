// metodo chato
const array = [1, 2, 10, 16]
const double = []
const newArray = array.forEach((num) => double.push(num * 2))

// metodo fácil
const newArray2 = array.map((num) => num*2)
addEventListener('click', (a) => {
    console.log('amor')
})      

// filter
const filterArray = array.filter(num => {
    return num > 5
})

// reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0) // o valor '0' é pq o acumulador começa em 0 e soma com os arrays

//map()

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);