/**
* Adding a new category 
*/

// Category Name
let categoryName = document.getElementById("category_name");

// Category Input
let categoryInput = document.getElementById("category_input");


/**
 * On input the a new name is set
 */
function newCategoryName() {

    if (categoryInput.value == "") {
        categoryName.innerHTML = "New Category";
    } else {
        categoryName.innerHTML = categoryInput.value;
    }
    
}

categoryInput.addEventListener("input", newCategoryName);

