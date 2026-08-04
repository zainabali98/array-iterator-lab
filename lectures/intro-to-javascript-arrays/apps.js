console.log('Arrays Lesson')

/* 
Data Types:

1. String
2. Boolean
3. Number
4. null
5. undefined

6. Arrays
7. Objects
*/

const myName = 'Ahmad'

console.log(myName.toLowerCase())

const myNumber = 5




// Arrays Lesson

const myStudents = ['Waleed','Ali','Waad']

console.log(myStudents)

console.log(myStudents[3])


// pop(): removes the last element in the array
myStudents.pop()

console.log(myStudents)


// push(): adds an element to the end of the array
myStudents.push('Mahdi')

console.log(myStudents)



// shift(): removes the first element
myStudents.shift()

console.log(myStudents)


// unshift(): adds to the beggening of array
myStudents.unshift('Ammar')

console.log(myStudents[1])

const secondValue = myStudents[2]

console.log(myStudents)

myStudents[1] = 'Mohammad'

console.log(myStudents)



console.log(myStudents.length)

// splice(startingPoint, deleteCount): add or remove from the middle of the array
// 

myStudents.splice(1,0,'Husna')

console.log(myStudents)


// includes(): checks if the argument is in the array and returns true or false
console.log(myStudents.includes('Omar'))


// indexOf(): returns the index if the argument is in the array. If not then it ALWAYS returns -1
console.log(myStudents.indexOf('Omar'))




console.log(myStudents)

/* 
Methods that change the original array

pop()
push()
shift()
unshift()
splice()

Methods that dont

includes()
indexOf()
slice()
at()
join()
*/


// slice(starting, stopping): makes a copy of the array at the indexes. NOT INCLUDING STOPPING
const slicedStudents = myStudents.slice(0,3)
console.log(slicedStudents)


// .at()
console.log(myStudents[2])
console.log(myStudents.at(-1))



// join() and split()

// split(): converts my string into array
const myGreeting = 'Good Morning Sayed Hamed'

const arrayGreeting = myGreeting.split(' ')

console.log(arrayGreeting)


console.log(arrayGreeting.join(' '))


for(let i = 0; i<myStudents.length; i++){
    console.log(myStudents[i])
}


// for of

console.log('For Of')
for(let oneStudent of myStudents){
    console.log(oneStudent)
}

// .forEach()
myStudents.forEach(function(oneStudent){
    console.log(oneStudent)
})





console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')



console.log('---------------------------')
function addTwoNumbers(num1,num2){
    return num1 + num2
}
console.log(addTwoNumbers(4,2))

const addTwoNumbersAgain = function(num1, num2){
    const teacherName = 'Sayed Hamed'
    return num1 + num2
}


console.log(addTwoNumbersAgain(4,2))


const addTwoNumbersAgainAgain = (num1, num2) => num1 + num2

console.log(addTwoNumbersAgainAgain(4,2))


const numberTimesItself = number=> number * number

console.log(numberTimesItself(5))


console.log(typeof true)


console.log('')
console.log('')
console.log('')
console.log('')
console.log('')
console.log('')