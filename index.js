const submitButton = document.querySelector('#submit')
const form = document.querySelector('form')
const successState = document.querySelector('#success-card')
const mainCard = document.querySelector('#main-card-container')
const dismissButton = document.querySelector("#dismiss")
const emailInput = document.querySelector('#email-input')
let userEmail = document.querySelector('#user-email')

submitButton.addEventListener('click', () => {
    const userInput = emailInput.value
    if(userInput.length < 1) {
        return form.classList.add('error-state')
    } else if (userInput.includes('@') !== true) {
        return form.classList.add('error-state')
    } else if (userInput.includes('.') !== true) {
        return form.classList.add('error-state')
    } else {
        mainCard.classList.add('hidden')
        successState.classList.remove('hidden')
        form.classList.remove('error-state')
        userEmail.textContent = userInput
    }
})



dismissButton.addEventListener('click', () => {
    successState.classList.add('hidden')
    mainCard.classList.remove('hidden')
})