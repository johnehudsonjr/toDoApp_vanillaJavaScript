const sprintOne = ['JavaScript Practice', 'React Practice', 'Update Resume', 'Update Portfolio', 'Job Applications']


// Create an Array with five to dos
// You have x todos
// Print first and second to last

// Determines How Many index positions are in array
    // console.log(sprintOne.length)
    // console.log(` You have ${sprintOne.length} things on your to do list.`)

// Print First Indexed Item
    // console.log(sprintOne[0])

//  Print Second from last 
    // console.log(sprintOne[sprintOne.length -2])

// DELETE THE THIRD ITEM
// ADD A NEW ITEM ON THE END
// REMOVE THE FIRST ITEM FROM LIST

// Third item deleted
    // sprintOne.splice(2,1)
    // console.log(sprintOne)

// Add new item on end 
    // sprintOne.push("keep working hard! Almost employed.")
    // console.log (sprintOne)

// remove 1st item
    // sprintOne.shift()
    // console.log(sprintOne)

// 1. The first item
// 2. The second item

console.log(`You have ${sprintOne.length} items left in Sprint One.`)

sprintOne.forEach(function(element, index){
    console.log(`Item ${index + 1}: ${element}`)
})