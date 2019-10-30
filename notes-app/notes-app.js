

//  DOM - Document Object Model

// query and remove QUERY Selector allows us to find the first tag

// const p = document.querySelector('p')
// p.remove()
// console.log(p)

// query all elements in the array and remove all p tags
// const ps = document.querySelectorAll('p')
// console.log(ps)


// ps.forEach(function(p){
//     p.textContent ='******'
//     console.log(p.textContent)

// })

// Add a New Element

// Step 1: Create new element using .createElement()

// const newParagraph = document.createElement('p')

// Step 2: Use textContent method and add what you want to say.
// newParagraph.textContent = 'This is a new element from JavaScript.'

// Step 3: .appendChild will add the element to the last item in the selector, body
// document.querySelector('body').appendChild(newParagraph)

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
const filters = {
    searchText:''
}

// The function below is called to filter the notes and render them to the screen
    // it is a function that takes in array of objects(notes) and filters (object)

const renderNotes = function(notes, filters){

    // STEP 1: filers the notes array and stores the returned values into the filteredNotes variable
        //  returns the title in the element to lowercase that INCLUDES the words that have been typed into the input(filters.searchText.toLowercase string)
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // STEP 2: Clears everything in the attached element (#notes DIV via HTML)
        // .innerHTML sets everything to an empty string 
    document.querySelector('#notes').innerHTML = ''

    // STEP 3: Loops through the filteredNotes /creating a new element in #notes NotesDIV
    filteredNotes.forEach(function(note){
        // create Note element
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}


// Create Note Button
document.querySelector('#createNote').addEventListener('click',function(){
    console.log('CREATED Note')
   
})

// Remove Note Button
document.querySelector('#removeNote').addEventListener('click', function(){
    
    document.querySelectorAll('.note').forEach(function(note){
        note.remove() 
    })
})

// input field with id="searchText"

document.querySelector('#searchText').addEventListener('input', function(e){
    // search text on the filters object gets set = to what is in the input field (e.target.value)
    filters.searchText = e.target.value
    // function runs everytime input is changed / something is input in box renders everytime input changes
    renderNotes(notes, filters)
})