const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


function showError(input, message) {
    let formControl = input.parentElement
    formControl.classList.add('error')
    let small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input) {
    let formControl = input.parentElement
    formControl.classList.add('success')
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

function getFieldName(input) {
    let firstCharacter = input.charAt(0).toUpperCase() + input.slice(1)
    return firstCharacter
}

function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input.id)} is required`)
        } else {
            showSuccess(input)
        }
    })

}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequired([username, email, password, password2])
})