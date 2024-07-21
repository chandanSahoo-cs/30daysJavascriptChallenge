let name="Chandan"
let age=19
const skills = ["competitive programming","web development"]
let literal = `My name is ${name} and my age is ${age}`
console.log(literal);

let literalTwo = `My name is ${name}
My age is ${age}
And I'm currently doing ${skills[0]} & ${skills[1]}`
console.log(literalTwo)

const [one,two] = skills
console.log(one)
console.log(two)

const book ={
    title : "Blue Lock",
    author : "Some one from Japanese"
}
const {title,author}=book
console.log(title)
console.log(author)
const moreSkills = ["Blockchain",...skills]
console.log(moreSkills)

function sum(...num){
    return num.reduce((acc,curr)=>acc+curr,0);
}
console.log(sum(1,2,3,4,5,))

function product(num1, num2=1){
    return num1*num2;
}
console.log(product(2))

let mytitle= "Mr."
let surname = "Sahoo"
function greet(){
    console.log(`${this.mytitle}.${this.name} ${this.surname} is doing js`);
}
const myName = {
    mytitle,
    name,
    surname,
    greet
}
console.log(myName);

const createKey = key => key;
const data = {
    [createKey("db1")] : "username",
    [createKey("db2")] : "email",
}
console.log(data)

