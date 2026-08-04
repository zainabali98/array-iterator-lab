console.log('control flow lesson')


//
console.log(6 === '6')


//both or all conditions need to be true
console.log(9 === 9 && 4===3 )
console.log(3 > 2 && 4 > 1)


// || only one expression needs to be true! ( or statemnent)
console.log( 10 > 20 || 3 > 2)


//! inverse value.. changes true to false and false to tru
console.log(!false)

//!== not true/equal
console.log(5  !== 7)



// driving age

let age = 'zainab'

if(age >= 18){
    console.log('you are allowed to drive')
}

// ask about else is or just another if
else if( age <= 17){
    console.log('not allowed')
}
else{
    console.log('age provided not valid')
}



let color = 'green'


if(color === 'red'){
    console.log('stop')
}

else if(color === 'yellow'){
    console.log('slow')
}

else if(color === 'green'){
    console.log('go')
}

else{console.log("Error")}



let isUserLoggedIn = true

if(isUserLoggedIn === true){

}

else{
    console.log('Not Logged In')
}



// for(starting point; condition to continue; increment){action}

for(let i = 4; i<=10; i++){
    console.log(i)
}




for(let i = 0; i< 20; i++){
    if(i % 2 === 0 && i !== 12){
        console.log(i)
    }
  
}

// exercise 2:
// 1. write a for loop that starts at 17 and ends at 37 ( including 37)
// 2. if i is even do NOT console.log() it
// 3. if i is odd Do console.log(i)
// 4. BONUS: if the number is 24 dont console.log it

// for(starting point; condition to continue; increment){action}


// i % 2 === 1
// i % 2 !== 0 (i % 2 is NOT equal to 0)
for(let i = 17; i <= 37; i++){
    if(i % 2 === 1 && i !== 25)

    console.log(i)
}