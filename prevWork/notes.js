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

// const notes = [ {
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

// console.log('A' < 'a')


const findNote = function (notes, noteTitle) {
    // findIndex returns the index of first element that satisfies the provided testing function

    const index = notes.findIndex(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()

    })
    // console.log(index)
    return notes[index]
  
   
}

// FILTER ARRAY
const findNotes = function(notes, query){
    
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
})
}

// console.log(findNotes(notes, 'eat'))

// SORT ARRAY USING .sort()

const sortNotes = function(notes) {
    notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }
        else if (b.title.toLowerCase() < a.title.toLowerCase() ) {

        }
        else {
            return 0
        }

    })
}
// // We call the function and pass in what we are searching for
// const note = findNote(notes, 'Office modification')
//     console.log(note)




// const findNote = function (notes, noteTitle) {
   
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()

//     })
// }

// const note = findNote(notes, "Office modification");


// console.log(note)

// sortNotes(notes)



console.log(todos)
console.log(notes)
// console.log(notes)