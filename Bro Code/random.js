 // o '6' serve para definir o valor máximo do random, o 'floor' serve para manter apenas o 1° digito, o '1' serve para evitar que o digito seja 0



document.getElementById('roll').onclick = function() {

    let x = Math.floor(Math.random() * 6) + 1

    document.getElementById('valor').innerHTML = x 

}