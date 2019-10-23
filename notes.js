// const notes = ['Note 1', 'Note 2', 'Note 3']
// 

// Pop removes the last item from an array
    // console.log(notes.pop())
// Push adds an item to an array
    // notes.push('Note 4')

// Pop removes the last item from an array
    // console.log(notes.length)
    // console.log(notes)

// Shift and Unshift ADDS and REMOVES from Front

// notes.unshift('Add Note To Front')

    // console.log(notes)

// notes.shift()
    // console.log(notes)

// Index to start at when removing and the second argument is the amount of items you want to remove. THE THIRD argument is what you want to replace it with.
    // notes.splice(1, 1, "this is the new second item")
    // Bracket notation
    // notes[2] = "This is the new note 3"

// LOOPING OVER ARRAY

// When you pass a function into a function. It is called a callback function.
    // notes.forEach(function(item, index){
    //     console.log(index)
    //     console.log(item)

    // })

    // console.log(notes)

// counting for loop
    // for (let count = 0; count <= 2; count ++ ){

    //     console.log(count)

    // }

    // using counter in array BACKWARDS

//     for (let count = notes.length -1; count >= 0; count --){
//         console.log(notes[count])
//     }

// console.log(notes.indexOf('note 2'))
// If you get -1 that means it was not present


// ====================== Searching Arrays Part 1 =================

// const notes = [{}, {
//     title: 'My next trip',
//     body: 'I would like to go to Spain'

// }, {
//     title: 'Habits to work on',
//     body: 'Exercise more and eat better'
// }, {
//     title: 'office modification',
//     body: 'New chairs and new desk'
// }]

// let someObject = {}
// let otherObject = someObject

// console.log(someObject === otherObject)

// const index = notes.findIndex(function(note, index){
//     console.log(note)
//    return note.title === 'Habits to work on'

// })
// console.log(index)
// console.log(notes)
// console.log(notes.length)
// console.log(notes)

// ====================== Searching Arrays Part 2=================

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'

}, {
    title: 'Habits to work on',
    body: 'Exercise more and eat better'
}, {
    title: 'Office modification',
    body: 'New chairs and new desk'
}]


const findNote = function (notes, noteTitle) {
   return notes.find(function(note, index) {

        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })

  
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {

//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })

//     return notes[index]
// }

const note = findNote(notes, "Office modification") 
console.log(note)
