const username = document.querySelector("#username")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")
const email = document.querySelector("#email")
const sendBtn = document.querySelector(".send")
const clearBtn = document.querySelector(".clear")
const popup = document.querySelector(".popup")

const showError = (input, msg) => {
    const formBox = input.parentElement
    formBox.classList.add("error")
    const errorText = formBox.querySelector(".error-text")
    errorText.innerText = msg
}

const cleanError = input => {
    const formBox = input.parentElement
    formBox.classList.remove("error")
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === "") {
            showError(el, el.placeholder)
        } else {
            cleanError(el)
        }
    })
}

const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} musi mieć minimum ${min} znaków`)
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, "Hasła nie są takie same")
    }
}

const checkEmail = email => {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExp.test(email.value)) {
        cleanError(email)
    } else {
        showError(email, "Podałeś niepoprawnego maila")
    }
}


sendBtn.addEventListener("click", e => {
    e.preventDefault()
    checkForm([username, password, password2, email])
    checkLength(username, 5)
    checkLength(password, 8)
    checkPassword(password, password2)
    checkEmail(email)

})
clearBtn.addEventListener("click", e => {
    e.preventDefault();
    [username, password, password2, email].forEach(el => el.value = "")
})