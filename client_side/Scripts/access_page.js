/**
* This script is for manipulating the login and register structure
*/

// Access Colors used
let primary_color = '#CC2828'
let standard_white = '#FFFFFF'
let selector_on_color = '#939292'

// For the full login/register container
let accessContainer = document.getElementById('access_container')

// For the register and login selectors
let accessSelectorWrap = document.getElementById('access_selector_wrapper')
let registerSelector = document.getElementById('register_selector')
let loginSelector = document.getElementById('login_selector')
let registerSelectorText = document.getElementById('registerSelectorText')
let loginSelectorText = document.getElementById('loginSelectorText')

// For Forgot Password 
let forgotPasswordReturn = document.getElementById('forgot_password_return')
let forgotPasswordButton = document.getElementById('forgot_password_button')
let forgotSubmitButton = document.getElementById('forgot_submit_button')

// Forms for register, login and forgot password forms
let registerForm = document.getElementById('register_form')
let loginForm = document.getElementById('login_form')
let forgotPasswordForm = document.getElementById('forgot_password_form')
let otpForm = document.getElementById('otp_form')

/*
 * Adding event listener for the Register, Login, Forgot Password and OTP forms
 */

registerSelector.addEventListener('click', () => {

    accessContainer.style.height = '25rem'
    accessSelectorWrap.style.bottom = '1.6rem'
    registerSelector.style.backgroundColor = primary_color
    registerSelectorText.style.color = standard_white
    loginSelector.style.backgroundColor = standard_white
    loginSelectorText.style.color = selector_on_color

    loginForm.style.display = 'none'
    registerForm.style.display = 'block'
    forgotPasswordForm.style.display = 'none'
    otpForm.style.display = 'none'
    
})

loginSelector.addEventListener('click', () => {

    accessContainer.style.height = '20rem'
    accessSelectorWrap.style.bottom = '2.2rem'
    loginSelector.style.backgroundColor = primary_color
    loginSelectorText.style.color = standard_white
    registerSelector.style.backgroundColor = standard_white
    registerSelectorText.style.color = selector_on_color

    loginForm.style.display = 'block'
    registerForm.style.display = 'none'
    forgotPasswordForm.style.display = 'none'
    otpForm.style.display = 'none'
})

forgotPasswordButton.addEventListener('click', () => {

    accessContainer.style.height = '16rem'
    accessSelectorWrap.style.display = 'none'
    loginForm.style.display = 'none'
    registerForm.style.display = 'none'
    forgotPasswordForm.style.display = 'block'

    forgotPasswordReturn.addEventListener('click', () => {

        console.log("i was clicked")

        accessContainer.style.height = '20rem'
        accessSelectorWrap.style.bottom = '2.2rem'

        loginSelector.style.backgroundColor = primary_color
        loginSelectorText.style.color = standard_white
        registerSelector.style.backgroundColor = standard_white
        registerSelectorText.style.color = selector_on_color
    
        forgotPasswordForm.style.display = 'none'
        registerForm.style.display = 'none'
        accessSelectorWrap.style.display = 'flex'
        loginForm.style.display = 'block'
    
    })

    forgotSubmitButton.addEventListener('click', () => {
        
        accessContainer.style.height = '15rem'
        loginForm.style.display = 'none'
        registerForm.style.display = 'none'
        forgotPasswordForm.style.display = 'none'
        otpForm.style.display = 'block'

    })
})

/*
* Register Form Inputs
*/

let full_name = document.getElementById('full_name')
let register_email_address = document.getElementById('register_email_address')
let register_password = document.getElementById('register_password')
let confirm_password = document.getElementById('confirm_password')

confirm_password.addEventListener('input', () => {

    if(confirm_password.value === '') {
        confirm_password.style.outline = '2px solid #adadad'
    } else if(confirm_password.value !== register_password.value) {
        confirm_password.style.outline = `2px solid ${primary_color}`
    } else if(confirm_password.value === register_password.value) {
        confirm_password.style.outline = '2px solid lime'
    }
})

/*
* Adding event listener for the Register and Login submit button on click
*/

let register_submit_button = document.getElementById('register_submit_button')
let login_submit_button = document.getElementById('login_submit_button')

register_submit_button.addEventListener('click', async (e) => {

    const user_full_name = full_name.value
    const user_email_address = register_email_address.value
    const user_password = register_password.value
    const user_confirm_password = confirm_password.value
    const data = {user_full_name, user_email_address, user_password}

    if(user_password !== user_confirm_password) {
        e.preventDefault()
        alert('Confirm Passoword is incorrect')
    } else {
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('/register_user', options)
        const unpacked_response = await response.json()
    }
})

/*
 * Forgot Password Form 
 */

