var database = [
    {
        username: 'andrei',
        password: "1234",
    },
    {
        username: 'john',
        password: "12345",
    },
    {
        username: 'peter',
        password: "123456",
    }
]
var newsFeed = [
    {
        username: 'Bobby',
        timeline: "I'm happy"
    },
    {
        username: 'john',
        timeline: "I'm not happy"
    }
]

var userNamePrompt = prompt('Qual o usuário? ')
var passwordPrompt = prompt('Qual a senha? ')

function isRight(user, pass) {
    for (var i=0; i < database.length; i++){
        if (user === database[i].username && pass === database[i].password){
            return true
        }
    }
    return false
}   

function signIn(user, pass) {   
    if ( isRight(userNamePrompt, passwordPrompt) === true) {
        console.log('certo')
        alert('certissimo')
    } else {
        console.log('erro')
        alert('dados incorretos')
    }
}

signIn(userNamePrompt, passwordPrompt)