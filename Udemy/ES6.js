const player = 'bobby'
let experience = 100
var wizardLevel = false

// voce pode mudar os valores de um objeto q é constante, mas n o objeto
const player1 = {
    nome: 'john'
}

player1.nome = 'liza' // ok
player1 = 'liza' // nao

const player2 = {
    nome: 'joeu',
    idade: 13,
    rua: 'doido',
}

// voce pode definir assim: 
let nome2 = player2.nome
//ou
let {nome, idade, rua} = player2

let a = 'pedro'
let b = true
let c = null

//pode ser assim: 
let letras = {
    a: a,
    b: b,
    c: c,
}
// ou
let letra = {
    a, b, c
}

function ola(nome='', idade=30, bixo='cachorro') //os valores colocados são padrão, se vc n definir, quando rodar a função ele falará 30 e cachorro.

let vc = Symbol('banana') // n entendi, mas parece criar um simbolo unico, onde msm tendo outro igual, a maquina nunca os considera igual