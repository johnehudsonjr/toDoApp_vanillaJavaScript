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
// console.log(deleteSprint(sprintOne, 'Job applications'))
// console.log(deleteSprint(sprintOne, 'Job applications'))
// const deleteSprint = deleteSprint(sprintOne, 'rEaCt Practice')
// console.log(deleteSprint)

// FILTERING ARRAY

// Use filter that shows completed value of false
const sprintFilter = function(sprintOne) {
    return sprintOne.filter(function (sprint) {
        return sprint.completed === true


    })

}

const sortSprints = function(sprintOne) {
    sprintOne.sort(function(a, b){
        if (!a.completed && b.completed){
            return -1
        }
        else if (!b.completed && a.completed) {
              return 1
        }
        else {
            return 0
        }
    })
}
sortSprints(sprintOne)
console.log(sprintOne)
