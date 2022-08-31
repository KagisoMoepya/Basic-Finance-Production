/* 
On product click
*/
const productLineContainer = document.getElementById('product_line_container')
const category = document.querySelectorAll('.category')
const rightSidebarHeading = document.getElementById('right_sidebar_head')
const rightSidebar = document.getElementById('right_sidebar_container')
let product_list = []

category.forEach(product => {
    const product_name = product.querySelector('.stock_count')
    const stock_count = product.querySelector('.category_text')
    const product_img = product.querySelector('.category_img')
    const product_details = {product, product_name, stock_count, product_img}
    const sidebar_head_name = rightSidebarHeading.getElementsByTagName('h6')
    const sidebar_head_count = rightSidebarHeading.getElementsByTagName('h4')
    product_list.push(product_details)

    product.addEventListener('click', (e) => {
        // Sidebar heading on product click
        sidebar_head_count.item(0).textContent = stock_count.textContent
        sidebar_head_name.item(0).textContent = `${product_name.textContent} Stock Items Remaining`
    })
})

document.addEventListener('click', (e) => {
    const noHoverBackgroundColor = '#7B4E4E'
    const hoverBackgroundColor = '#d3caca'
    const noHoverTextColor = '#e9dcdc'
    const hoverTextColor = '#3c3939'
    let productBool = false

    product_list.forEach(details => {
        const { product } = details
        const { product_name } = details
        const { stock_count } = details
        const { product_img } = details

        if(e.target == product || e.target == product_name
           || e.target == stock_count || e.target == product_img) {
            product.style.backgroundColor = hoverBackgroundColor
            product.style.color = hoverTextColor
            productBool = true
        } else {
            product.style.backgroundColor = noHoverBackgroundColor
            product.style.color = noHoverTextColor
        }
    })

    if(productBool === false) {
        rightSidebar.style.right = '-12.5rem'
    } else {
        rightSidebar.style.right = '0rem'
    }
})