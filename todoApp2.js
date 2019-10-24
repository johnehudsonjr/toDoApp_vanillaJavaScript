
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

// 1. Convert array to an array of object ->text, completed(true/false)
// 2. Create a function to remove a todo by text value.

            // remove .pop() /. shift
            // .slice()

const deleteSprint = function(sprintOne, sprintTitle){

    const index = sprintOne.findIndex(function(sprint, index){
        return sprint.text.toLowerCase() === sprintTitle.toLowerCase()

    })
  console.log(index)
    if (index > -1) {
      return sprintOne.splice(index, 1)
    
    }
  
   
}

const deletedSprint = deleteSprint(sprintOne, 'rEaCt Practice')

// console.log(deletedSprint)
console.log(sprintOne)