// ou vc faz assim:

function signIn(nome, senha) {
    return nome + senha
}

// ou de jeito mais facil, as arrow functions: 

let signUp = (nome, senha) => nome + senha

// Currying
// padrao
const multiplicar = (a, b) => a*b
// novo
const multiplicarDnv = (a) => (b) => a*b // neste vc precisa dar os valores assim: multiplicarDnv(3)(2)
// novo do novo
const mutiplicarPor5 = multiplicarDnv(5) // quando vc usar o mutiplicarPor5 ele vai mutiplicar o valor, ex: multiplicarPor5(4) = 20


// Compose
// voce pode colocar uma função dentro de outra com outra dnv
const compose = (a, b) => (c) => a(b(c))
const sum = (num) => num + 1
compose(sum, sum)(20) // resultado é 22