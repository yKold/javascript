function resultado() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    // window.alert(Number(passo.value))

    var num = inicio.value
    while (num <= fim.value) {
        res.innerHTML = `${num}`
        num ++}}