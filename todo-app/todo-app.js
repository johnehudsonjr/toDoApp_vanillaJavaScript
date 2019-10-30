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

// Created a new filters object, with empty searchText string where our searched content will be placed
const filters = {
    searchText: ''
}

// Created a function that takes in the sprint array and the filters object
const renderSprints = function (sprintOne, filters) {

    // Filtered the sprints and RETURNED the new filtered array to filteredSprints
            // return the text of sprint (sprint.text) lower case that INCLUDES what is present in the filters|searchText property(lowercase)
    const filteredSprints = sprintOne.filter(function (sprint) {
        return sprint.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // This line clears the #sprints (id) Div by setting the innerHTML content to a string.
     document.querySelector('#sprints').innerHTML = ''

    // This line of code filters through the filteredSprints and returns the sprints that are false !sprint.completed
    const incompleteSprints = filteredSprints.filter(function (sprint) {
        return !sprint.completed
    })

    // Here is where I created an  H2 tag and used the incompleteSprints Array to show in DOM how many tasks are remaining (marked false)
        // Create element
    const summary = document.createElement('h2');
        // Change text content using template string
    summary.textContent = `You have ${incompleteSprints.length} sprints remaining.`
        // append the created element to the selected node
    document.querySelector('#sprints').appendChild(summary)
  
    // This code will loop through the filteredSprints array and create a new p tag for each element that is being filtered based on condition from filteredSprints
    filteredSprints.forEach(function (sprint) {
        const sprintEl = document.createElement('p')
        sprintEl.textContent = sprint.text
        document.querySelector('#sprints').appendChild(sprintEl)
    })


}

// renderSprints function call with sprintOne -array and filters object
renderSprints(sprintOne, filters)


// We looped through the sprintOne array using forEach and printed them to the DOM
// createElement = use variable with element you want to create as argument
// sprintOne.forEach(function (sprint) {
//     const p = document.createElement('p')
//     p.textContent = sprint.text
//     document.querySelector('body').appendChild(p)

// })

document.querySelector('#createSprint').addEventListener('click', function (e) {
    console.log("New Spirnt Created")
})


// Input Search Field
    // This takes what is  typed into the input field (eventListener) and set what's typed(e.target.value) equal to the filters object (filters.searchText) 
    // It calls renderSprints, running the function everytime something is typed jn input field
document.querySelector('#inputSprint').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderSprints(sprintOne, filters)

})