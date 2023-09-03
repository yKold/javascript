let grade = 'A'

switch(grade) {
    case 'A': 
        console.log('You did great')
        break
    case 'B': 
        console.log('You did good')
        break
    case 'C':  
        console.log('You did ok')
        break
    case 'D':
        console.log('You passed')
        break
    case 'F':
        console.log('You failed')
        break
    default:
        console.log(grade, 'is not a letter grade.')
} 