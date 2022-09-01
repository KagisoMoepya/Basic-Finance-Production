/* 
Close side bar functionality
*/

// Page heading identifiers
const pageHeadingContainer = document.getElementById('deal_options_heading')

// Form and Existing deals containers identifiers
const newDealForm = document.getElementsByTagName('form').item(0)
const existingDealsContainer = document.getElementById('existing_deals_container')

// Sidebar identifiers
const rightSideBarConainter = document.getElementById('right_sidebar_container')
const rightSidebarOptions = document.querySelectorAll('.right_sidebar_options')
const rightSelectorsContainer = document.getElementById('right_selectors_container')
const rightSelectorsClasses = rightSelectorsContainer.querySelectorAll('.right_side_selectors').item(0)

rightSelectorsClasses.addEventListener('click', () => {
    let img = rightSelectorsContainer.getElementsByTagName('img').item(0)
    let source = img.getAttribute('src')
    let optionsPic = './Icons/Deal Options/rightSide_options.svg'
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

// On Sidebar options click

rightSidebarOptions.forEach(option => {
    const optionText = option.getElementsByTagName('h4').item(0).textContent
    const newDealText = 'Create New Deal'
    const existingDealText = 'Existing Deals'
    const mainHeadingText = pageHeadingContainer.getElementsByTagName('h1').item(0)
    
    option.addEventListener('click', () => {
        if(optionText === newDealText) {
            rightSidebarOptions.forEach(optionSelected => {
                if(optionSelected === option) {
                    optionSelected.style.backgroundColor = '#940606'
                    optionSelected.style.color = 'white'
                } else {
                    optionSelected.style.backgroundColor = 'white'
                    optionSelected.style.color = '#9A9A9A'
                }
            })
            newDealForm.style.display = 'block'
            existingDealsContainer.style.display = 'none'
            mainHeadingText.textContent = newDealText
            return
        }
        rightSidebarOptions.forEach(optionSelected => {
                if(optionSelected === option) {
                    optionSelected.style.backgroundColor = '#940606'
                    optionSelected.style.color = 'white'
                } else {
                    optionSelected.style.backgroundColor = 'white'
                    optionSelected.style.color = '#9A9A9A'
                }
            })
        newDealForm.style.display = 'none'
        existingDealsContainer.style.display = 'flex'
        mainHeadingText.textContent = existingDealText
    })
})