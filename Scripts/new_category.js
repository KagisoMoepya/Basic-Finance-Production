/**
* Adding a new category 
*/

/**
* On input a new name is set
*/

let categoryName = document.getElementById("category_name");
let categoryInput = document.getElementById("category_input");

categoryInput.addEventListener("input", () => {

    if (categoryInput.value == "") {
        categoryName.innerHTML = "New Category";
    } else {
        categoryName.innerHTML = categoryInput.value;
    }

});


/**
* Adds a picture on the picture view of Add New Category
*/

let categoryOrTypeImg = document.getElementById("category_or_type_img");
let choosePicButton = document.getElementById("choose_img");
let fileName = document.getElementById("file_name");
let uploadedImage = "";

choosePicButton.addEventListener("change", () => {
    
    console.log(choosePicButton.files);
    const reader = new FileReader();

    reader.onload = function() {
        categoryOrTypeImg.src = reader.result;
    }

    const pictureData = choosePicButton.files[0];
    reader.readAsDataURL(pictureData);
    fileName.innerHTML = pictureData.name;
    
}, false)

