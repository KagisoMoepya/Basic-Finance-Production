/**
* This script is for manipulating the login and register structure
*/

// Access Colors used
    let primary_color = "#CC2828";
    let standard_white = "#FFFFFF";
    let selector_on_color = "#939292";

// For the full login/register container
let accessContainer = document.getElementById("access_container");

// For the register and login selectors
let accessSelectorWrap = document.getElementById("access_selector_wrapper");
let registerSelector = document.getElementById("register_selector");
let loginSelector = document.getElementById("login_selector");
let registerSelectorText = document.getElementById("registerSelectorText");
let loginSelectorText = document.getElementById("loginSelectorText");


// Forms for register and login
let registerForm = document.getElementById("register_form");
let loginForm = document.getElementById("login_form");

// For the Submit button
let accessSubmitButton = document.getElementById("submit_button");

/**
 * Adding event listener for the Register and Login Selector on click
 */

registerSelector.addEventListener("click", () => {

    registerSelector.style.backgroundColor = primary_color;
    registerSelectorText.style.color = standard_white;
    loginSelector.style.backgroundColor = standard_white;
    loginSelectorText.style.color = selector_on_color;

    loginForm.style.display = "none";
    registerForm.style.display = "block";

    accessContainer.style.height = "25rem";
    accessSelectorWrap.style.bottom = "1.6rem";

    accessSubmitButton.value = "Register";

})

loginSelector.addEventListener("click", () => {

    loginSelector.style.backgroundColor = primary_color;
    loginSelectorText.style.color = standard_white;
    registerSelector.style.backgroundColor = standard_white;
    registerSelectorText.style.color = selector_on_color;

    loginForm.style.display = "block";
    registerForm.style.display = "none";

    accessContainer.style.height = "20rem";
    accessSelectorWrap.style.bottom = "2.2rem";

    accessSubmitButton.value = "Login";

})

