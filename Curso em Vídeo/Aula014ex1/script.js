function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('final')
    let passo = document.getElementById('pulo')
    let res = document.getElementById('res')
    // window.alert(Number(passo.value))
    
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
        window.alert('Passo invalido')
        p = 1
    }
    if (f > i) {
        for (let c = i; c <= f; c += p) {
            window.alert(c)
            res.innerHTML += `${c}, \u{1f449}`
        }
    } else if (f < i) {
        for (let c = i; c >= f; c -= p){
            window.alert(c)
            res.innerHTML += `${c}, `
        }
    }
    
}