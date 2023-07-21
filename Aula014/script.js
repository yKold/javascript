function resultado() {
    var data = new Date()
    var ano = data.getFullYear()
    var dano = document.getElementById("ano")
    var res = document.getElementById("res")
    
    if (dano.value.length == 0 || dano.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("sex")
        var idade = ano - Number(dano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
    }
}