import {add} from "./module1.mjs";
import details from "./module2.mjs";
import { add1,sub,multiply,divide } from "./module3.mjs";
import square from "./module4.mjs";
import fxn from "./module5.mjs";
import _ from 'lodash'
import axios from 'axios'
console.log(add(1,2))
const person = details()
console.log(person)

console.log(add1(1,2))
console.log(sub(1,2))
console.log(multiply(1,2))
console.log(divide(1,2))
// console.log(divide(1,0))

console.log(square(2))

console.log(fxn.cube(3))
console.log(fxn.sqaureMinusOne(3))
console.log(fxn.sqaurePlusOne(3))
console.log(fxn.cubePlusOne(3))

const arr=[1,2,3,4,5,6,7,8,9,10]
const rra=_.reverse(arr.slice())
console.log(rra)

axios.get('https://api.example.com/data')
.then(response =>{
    console.log(response.data)
})
.catch(error=>{
    console.error("Error fetching data: ",error)
})