document.getElementById('myButton').onclick = function() {

    const myCheckBox = document.getElementById('myCheckbox')
    const visaBTn = document.getElementById('visaBtn')
    const mastercardBtn = document.getElementById('mastercardBtn')
    const paypalBtn = document.getElementById('paypalBtn')

    if(myCheckBox.checked) {
        console.log('funcionando') 
    }
    else {
        console.log('click no check button')
    }

    if(visaBTn.checked) {
        console.log('paying with visa')
    } else if(mastercardBtn.checked) {
        console.log('paying with mastercard')
    } else if(paypalBtn.checked) {
        console.log('paying with paypal')
    } else {
        console.log('select a payment type')
    }
}