// const funcao = () => 'Uma expressão de função '
let calculadora = {
    subtração: function(a, b) {
        subtração = a - b
        resultado = console.log(subtração)
    },
    soma: function(a, b) {
    soma = a + b
    resultado = console.log(soma)
}}
resultado = Number(calculadora.subtração(3, 7))
console.log(`O valor final foi: `+ resultado)