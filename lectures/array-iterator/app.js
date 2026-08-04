// console.log('Array Iterator Methods')


// const myName = 'Sayed Hamed'

// console.log(myName.toUpperCase())



// const myNums = [1, 2, 3, 4, 5]

// myName.forEach(function(something){console.log('something')})



// ALL Methods we see today are array methods
// All Methods we see today take in a function as the argument


const grades = [95, 62, 78, 90, 80, 30]





const passingGrades = grades.filter(oneGrade => oneGrade > 70)

console.log(passingGrades)






const shoppingCart = [
    {
        name: "Laptop",
        price: 1200,
        shipsToBahrain: true
    },
    {
        name: "Smartphone",
        price: 800,
        shipsToBahrain: false
    },
    {
        name: "Headphones",
        price: 150,
        shipsToBahrain: true
    },
    {
        name: "Smartwatch",
        price: 300,
        shipsToBahrain: false
    }
];

const itemsShipsToBahrain = shoppingCart.filter((oneItem) => {oneItem.shipsToBahrain === true})

console.log(itemsShipsToBahrain)




const pricesInRiyals = shoppingCart.map(oneItem => oneItem.price * 10)

console.log(pricesInRiyals)



const students = [
    {
        studentName: 'Ahmad',
        id: 57234
    },
    {
        studentName: 'Ammar',
        id: 2876
    },
    {
        studentName: 'Mohammad',
        id: 8795
    }
]



const ammarObject = students.findIndex((oneStudent) => {return oneStudent.id === 2876})

console.log(ammarObject)



const isShoppingCartValid = shoppingCart.every((oneItem) => {return oneItem.shipsToBahrain})

console.log(isShoppingCartValid)


const isAhmadInStudents = students.some((oneStudent) => {return oneStudent.studentName === 'Ahmad'})

console.log(isAhmadInStudents)