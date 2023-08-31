const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appt.",
        isCompleted: false
    },
]

// forEach, map, filter
todos.forEach(function(todo){
//   console.log(todo.text)
})
// map is used to filter certain values from objects,
// and append to an an array.
const todoText = todos.map(function(todo){
    return todo.text
})
//console.log(todoText)
//
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text
})
//console.log(todoCompleted)

// shorthand if statements
const x = 10
//              if   then    or
const color = x > 10 ? 'red' : 'blue'

//console.log(color)

// switch can be used like if statements
// conditioned variable 
switch(color){
//  if        then
    case "red":
        console.log('Color is red')
        break
    case "blue":
        console.log('Color is blue')
        break
//  else 
    default:
        console.log('Color is neither red nor blue')
}

// Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.dob = new Date(dob)
}

Person.prototype.getBirthYear = function() {
    return `${this.firstName} ${this.lastName}`
}

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.dob = new Date(dob)
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith', '3-6-1970')
