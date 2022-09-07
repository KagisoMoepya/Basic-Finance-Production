// Sidebar identifiers
const rightSideBarConainter = document.getElementById('right_sidebar_container')
const rightSidebarOptions = document.querySelectorAll('.right_sidebar_options')
const rightSelectorsContainer = document.getElementById('right_selectors_container')
const rightSelectorsClasses = rightSelectorsContainer.querySelectorAll('.right_side_selectors').item(0)

rightSelectorsClasses.addEventListener('click', () => {
    let img = rightSelectorsContainer.getElementsByTagName('img').item(0)
    let source = img.getAttribute('src')
    let optionsPic = './Icons/Product Line Icons/Deal Options/rightSide_options.svg'
    let closePic = './Icons/Product Line Icons/close.svg'

    if(source === optionsPic) {
        img.style.transform = 'rotate(270deg)'
        rightSideBarConainter.style.right = '0rem'
        return img.setAttribute('src', closePic)
    }
    img.style.transform = 'rotate(90deg)'
    rightSideBarConainter.style.right = '-12.5rem'
    return img.setAttribute('src', optionsPic)
})

/* 
Checkout Select Click
*/
const checkoutButton = rightSelectorsContainer.querySelectorAll('.right_side_selectors').item(1)
const ordersModel = document.getElementById('model')
const table = model.querySelector('table')

checkoutButton.addEventListener('click', (e) => {
    ordersModel.style.opacity = '1'  
    ordersModel.style.zIndex = '1'
    ordersModel.style.transition = 'opacity 0.3s ease-out 0.1s, z-index 0.3s ease-out, width 0s ease, height 0s ease'
})

ordersModel.addEventListener('click', () => {
    ordersModel.style.opacity = '0'
    ordersModel.style.zIndex = '-1'
    ordersModel.style.transition = 'opacity 0.3s ease-out, z-index 0.3s ease-out  0.1s, width 0s ease, height 0s ease'
})

table.addEventListener('click', (e) => {
    e.stopPropagation()
})