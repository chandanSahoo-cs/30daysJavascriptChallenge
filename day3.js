let num1=1
if(num1>0) console.log("positive")
else console.log("negative")

let person={
    name : "Chandan",
    age : 18
}
if(person.age>=18) console.log("Eligible to vote")
else console.log("Not eligible to vote")

let num2=5
let num3=3

if(num1>num2){
    if(num1>num3) console.log(`num1 : ${num1} is greater `)
    else  console.log(`num3 : ${num3} is greater `)
}
else{
    if(num2>num3) console.log(`num2 : ${num2} is greater`)
    else console.log(`num3 : ${num3} is greater`)
}
let day=2

switch (day) {
    case 1 :
        console.log("Monday")
        break
    case 2 :
        console.log("Tuesday")
        break
    case 3 :
        console.log("Wednesday")
        break
    case 4 :
        console.log("Thursday")
        break
    case 5 :
        console.log("Friday")
        break
    case 6 :
        console.log("Saturday")
        break
    case 7 :
        console.log("Sunday")
        break
    default :
        console.log("Enter right number")
}

let marks=5;
switch (marks){
    case (5) : 
        console.log('A')
        break
    case (4) : 
        console.log('B')
        break
    case (3) : 
        console.log('C')
        break
    case (2) : 
        console.log('D')
        break
    case (1) : 
        console.log('F')
        break
    default : 
        console.log("Enter marks between 0 and 100 (inclusive)")
}

let num4=3;
num4%2==0?console.log(`Number: ${num4} is even`):console.log(`Number: ${num4} is odd`)
let year=2020;
if(year%4==0){
    if(year%100!=0){
        console.log(`Year : ${year} is a leap year`)
    }
    else{
        if(year%400!=0){
            console.log(`Year : ${year} is a leap year`)
        }
        else console.log(`Year : ${year} is not a leap year`)
    }
}
else{
    console.log(`Year : ${year} is a leap year`)
}
