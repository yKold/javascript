var database = [
    {
        username: 'andrei',
        password: "1234",
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

function signIn(user, pass ) {   
    if (user === database[0].username && pass === database[0].password) 
    {
        console.log(newsFeed)
    } 
    else {
        alert('Usuário ou senha incorretos')
    }
}

signIn(userNamePrompt, passwordPrompt)