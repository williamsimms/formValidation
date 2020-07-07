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


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (username.value === '') {
        showError(username, 'Username is Required')
    } else {
        showSuccess(username)
    }

    if (email.value === '') {
        showError(email, 'Email is Required')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email Is Not Valid')
    } else {
        showSuccess(email)
    }

    if (password.value === '') {
        showError(password, 'Password is Required')
    } else {
        showSuccess(password)
    }

    if (password2.value === '') {
        showError(password2, 'Password 2 is Required')
    } else {
        showSuccess(password2)
    }
})