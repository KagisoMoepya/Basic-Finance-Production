/**
* Adding a new category 
*/

/**
* On input a new name is set
*/

let categoryName = document.getElementById("category_name")
let categoryInput = document.getElementById("category_input")

categoryInput.addEventListener("input", () => {
    if (categoryInput.value == "") {
        categoryName.innerHTML = "New Stock Item"
    } else {
        categoryName.innerHTML = categoryInput.value
    }
})

/**
* Adds a picture on the picture view of Add New Category
*/

let categoryOrTypeImg = document.getElementById("category_or_type_img")
let choosePicButton = document.getElementById("choose_img")
let fileName = document.getElementById("file_name")
let fileNameString = ""

choosePicButton.addEventListener("change", () => {
    const reader = new FileReader()
    reader.onload = function() {
        categoryOrTypeImg.setAttribute("src", reader.result)
        categoryOrTypeImg.style.backgroundColor = "#d5d1d1"
    }

    const pictureData = choosePicButton.files[0]
    reader.readAsDataURL(pictureData)
    fileName.innerHTML = pictureData.name
    fileNameString = pictureData.name
}, false)

/**
* On Submit click color should change to standard color
*/

let addCategoryButton = document.getElementById("add_category_button")

addCategoryButton.addEventListener("click", () => {
    if (categoryInput.value.length > 0 && fileNameString != "") {
        categoryOrTypeImg.style.backgroundColor = "#7B4E4E"
    }
})


