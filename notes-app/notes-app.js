const sprintOne = [{
    text: 'JavaScript Practice',
    completed: false
}, {
    text: 'React Practice',
    completed: true
}, {
    text: 'Update Resume',
    completed: true
}, {
    text: 'Update Portfolio',
    completed: false
}, {
    text: 'Job Applications',
    completed: true
}]


//  DOM - Document Object Model

// query and remove QUERY Selector allows us to find the first tag

// const p = document.querySelector('p')
// p.remove()
// console.log(p)

// query all elements in the array and remove all p tags
const ps = document.querySelectorAll('p')
console.log(ps)


ps.forEach(function(p){
    p.textContent ='******'
    console.log(p.textContent)

})

// Add a New Element

// Step 1: Create new element using .createElement()

const newParagraph = document.createElement('p')

// Step 2: Use textContent method and add what you want to say.
newParagraph.textContent = 'This is a new element from JavaScript.'

// Step 3: .appendChild will add the element to the last item in the selector, body
document.querySelector('body').appendChild(newParagraph)