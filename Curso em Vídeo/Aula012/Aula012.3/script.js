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
        // res.innerHTML = `Idade Calculada: ${idade}`

        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 5){
                img.setAttribute('src', 'imagens/H bebe.jpg') 
                img.style.width = '200px'
            } else if (idade < 13) {
                img.setAttribute('src', 'imagens/H criança.jpg')
                img.style.width = '200px'
            } else if (idade < 20) {
                img.setAttribute('src', 'imagens/H jovem.jpg')
                img.style.width = '200px'
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/H adulto.jpg')
                img.style.width = '200px'
            } else if (idade >= 60) {
                img.setAttribute('src', 'imagens/H idoso.jpg')
                img.style.width = '200px'
            } 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 5){
                img.setAttribute('src', 'imagens/M bebe.jpg') 
                img.style.width = '200px'
            } else if (idade < 13) {
                img.setAttribute('src', 'imagens/M criança.jpg')
                img.style.width = '200px'
            } else if (idade < 20) {
                img.setAttribute('src', 'imagens/M jovem.jpg')
                img.style.width = '200px'
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/M adulto.jpg')
                img.style.width = '200px'
            } else if (idade >= 60) {
                img.setAttribute('src', 'imagens/M idoso.jpg')
                img.style.width = '200px'
            } 
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}