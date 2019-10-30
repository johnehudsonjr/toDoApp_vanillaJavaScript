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

// 1. Setup new div to contain the new sprints
// 2. Setup filters object with searchtext propety and wire up a new filter input to change it
// 3. Create a renderSprints function to render and re-render the latest filtered data


// This filters the sprintOne array and places the sprints that are false in a new array called incompleteSprints


// Starts
const incompleteSprints = sprintOne.filter(function (sprint) {
    return !sprint.completed
})
// Below is where we created an H2 tag and used the incompleteSprints Array to show in DOM how many tasks are remaining (marked false)
const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteSprints.length} sprints remaining.`
document.querySelector('body').appendChild(summary)
// ends




// We looped through the sprintOne array using forEach and printed them to the DOM
// createElement = use variable with element you want to create as argument
sprintOne.forEach(function(sprint){
    const p = document.createElement('p')
    p.textContent = sprint.text
    document.querySelector('body').appendChild(p)

})

document.querySelector('#createSprint').addEventListener('click', function(e){
    console.log("New Spirnt Created")
})

document.querySelector('#inputSprint').addEventListener('input', function(e){
    console.log(e.target.value)
})