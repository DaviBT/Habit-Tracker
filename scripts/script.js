const form = window.document.querySelector('#formHabits')
const library = new NLWSetup(form) // cdn library

const button = window.document.querySelector('.newInfo')

button.addEventListener('click', newInfoSent) 
// when the user clicks the button, the function 'newInfoSent' will be called

form.addEventListener('change', save)
// when the user make a change in the form, the function 'save' will be called

function newInfoSent() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // dd/mm/yyyy -> I don't want the year
    const dayExists = library.dayExists(today)

    if (dayExists == true){ // verifying if the day exists in the page
        window.alert("[ERROR] This day already exists!")
        return
    }
    library.addDay(today)
    window.alert("Day successfully added ✅")

}

function save() {
    localStorage.setItem('habits@newHabits', JSON.stringify(library.data)) // create an item that gets the result as an text
}

const data = JSON.parse(localStorage.getItem('habits@newHabits')) || {} // transforming the text into an object, and when the user access for the first time, data is empty

library.setData(data)
library.load()