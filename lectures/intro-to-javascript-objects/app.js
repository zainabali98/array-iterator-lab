console.log('Objects Lesson')




const myStudents = {
    name: 'Ammar',
    age: 22,
    languages: ['English', 'Arabic']
}

console.log(myStudents)
console.log(myStudents.name)

// changing a key value pair
myStudents.age = 32

console.log(myStudents)


// add a new key-value pair (just add it after a(.))

myStudents.cprNumber = 123456
console.log(myStudents)


delete myStudents.cprNumber
console.log(myStudents)



// Accessing an array in an object
console.log(myStudents.languages[1])



const allStudents = [
    {
        studentName: 'Ali',
    },
    {
        studentName: 'Waleed',
    },
    {
        studentName: 'Ahmed',
    },
]

console.log(allStudents[1].studentName)


for (let oneStudent of allStudents) {
    console.log(`Hello my name is ${oneStudent.studentName}`)
}


for (let i = 0; i < allStudents.length; i++) {
    console.log(allStudents[i].studentName)
}



/*
Exercise 1:
Loop through this array of objects
console.log the following string:
"I am [teacherName] and I am from [country]"
*/
const allTeachers =
    [
        { teacherName: "Omar", country: 'Saudi Arabia', languages: ['English', ' Half Arabic'] },
        { teacherName: "Jameela", country: 'Bahrain', languages: ['English', 'Arabic'] },
        { teacherName: "Sayed Hamed", country: 'Bahrain', languages: ['English', 'Arabic'] }
    ]


for (let i = 0; i < allTeachers.length; i++) {

    console.log(`Hello I am ${allTeachers[i].teacherName} and I am from ${allTeachers[i].country}`)
}

// BONUS: print all the languages the teachers speak like follows (Hint: Nested loops):
// "I am [teacherName] and I am from [country] and I speak these languages:"


for (let i = 0; i < allTeachers.length; i++) {

    console.log(`Hello I am ${allTeachers[i].teacherName} and I am from ${allTeachers[i].country} and I speak these languages:`,);
    
    for (let j = 0; j< allTeachers[i].languages.length; j++) {
        console.log(allTeachers[i].languages[j])
    }
}




const newStudent = {
    studentName: 'Mohammed',
    sayHi: function(){
        console.log('Hello I am Mohammed')
    }
        
}
    
newStudent.sayHi()



const bankAccount = {
    owner: 'Waleed',
    balance: 75000,
    withdraw: function(amount){
        bankAccount.balance -= amount
    }
}

bankAccount.withdraw(400)
console.log(bankAccount)




bankAccount.deposit() = function(amount){
  bankAccount += amount
}



