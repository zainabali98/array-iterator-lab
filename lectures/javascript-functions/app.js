console.log('Functions Lesson')



  console.log('=======================')
  console.log('Good Morning Zainab')
  console.log('=======================')




/// Two parts with working with functions

// 1. declarng a function

function greetAmmar(){
    console.log('Good Morning Ammar')
}

// 2. calling a function

greetAmmar()
greetAmmar()


function greetStudents(studentName, timeOfDay){
    console.log('Good ' + timeOfDay + ' ' + studentName)
    console.log(`Good ${timeOfDay} ${studentName}`)
}

greetStudents('Zainab','Night')
greetStudents('Ali','evening')



// exercise 2:
// 1. declare a function that takes 2 numbers
// 2. this function should add the two numbers together and console.log() the result
// 3. call the function with any 2 numbers you want


function totalNumber(numOne, numTwo){
 console.log(numOne + numTwo)
}
totalNumber(6,10)
totalNumber(6,20)




function addNumbers(first, second){
    
    return first + second
}

const result = addNumbers(31, 89)

console.log(result)




