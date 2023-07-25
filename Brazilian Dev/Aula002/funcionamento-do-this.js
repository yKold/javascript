let personagemN1 = {
    nome: 'joao',
    idade: 18,
    cidade: 'belo horizonte',
    pai: 'mario',
    mae: 'joana',
    falaN1: function() {
        console.log(`Olá meu nome é ${this.nome}`)
    } ,
    falaN2: function() {
        console.log(`A minha cidade é ${this.cidade}`)
    }, 
    falaN3: function() {
        console.log(`Meu pai se chama ${this.pai}`)
    } ,
    falaN4: function() {
        console.log(`Minha mãe se chama ${this.mae}`)
    } ,
    falaN5: function() {
        console.log(`Vivo feliz nestas terras!`)
    } ,
}

personagemN1.falaN5()