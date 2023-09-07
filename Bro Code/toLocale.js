let myNum = 123123123
let myNum2 = 123123123

// to locale string = ('lingua', { stilo: 'moeda', moeda: 'reais'})
myNum = myNum.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
myNum2 = myNum2.toLocaleString(undefined, {style: 'percent'})
