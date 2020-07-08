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

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not Valid')
    }

}

function checkPasswords(firstInput,secondInput) {
 if (firstInput.value !== secondInput.value) {
   showError(secondInput, 'Passwords do not Match')
 }
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

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters long`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters long`)
    } else {
        showSuccess(input)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPasswords(password,password2)
})