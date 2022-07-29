/**
 * This script is for manipulating the default page
 */

//For the full side bar
let sideBar = document.querySelector("#side_bar_container");

//For the toggle button
let toggleButton = document.getElementById("expand_toggle_button");
let togglePic = document.getElementById("toggle_picture");
let toggleText = document.getElementById("toggle_text");
let toggleStatus = true;

//For the options buttons
let optionBar = document.getElementById("options_bar");
let optionPic = document.querySelectorAll(".option_icon");
let optionText = document.querySelectorAll(".option_text");

/**
 * Adding event listener for toggle button
 */
toggleButton.addEventListener("click", () => {

    if(toggleStatus) {

        toggleText.style.fontSize = "0rem";
        toggleButton.style.width = "2.5rem";
        togglePic.style.transform = "rotate(270deg)";
        toggleStatus = false;

        sideBar.style.width = "2.5rem";

        optionPic.forEach(icon => {
            icon.style.left = "0.5rem";
        });

        optionText.forEach(text => {
            text.style.fontSize = "0rem";
        });

    } else {

        toggleText.style.fontSize = "0.8rem";
        toggleButton.style.width = "12rem";
        togglePic.style.transform = "rotate(90deg)";
        toggleStatus = true;

        sideBar.style.width = "12rem";

        optionPic.forEach(icon => {
            icon.style.left = "1.5rem";
        });

        optionText.forEach(text => {
            text.style.fontSize = "0.8rem";
        });
        
    }

})