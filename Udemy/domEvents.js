let button = document.getElementById('botao')
let texto = document.getElementById('texto')
let ul = document.querySelector('ul')
button.addEventListener('click', function(){
    if(texto.value.length > 0) {
        var li = document.createElement('li')
        li.appendChild(document.createTextNode(texto.value))
        ul.appendChild(li)}
        input.value = ''
}) // appendChild: adiciona um valor dentro do pai
// createTextNoda: cria um texto
// createElement: cria um novo elemento

texto.addEventListener('keypress', function(event){
    if(texto.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement('li')
        li.appendChild(document.createTextNode(texto.value))
        ul.appendChild(li)}
        input.value = ''
})