class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }
    greeting(){
        console.log(`Hello! ${this.firstName}`)
    }
    updateAge(num1){
        this.age+=num1;
    }
    static genericGreeting(){
        console.log("Hello User")
    }

    get fullName(){
        return this.firstName+" "+this.lastName
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        this._firstName=value
    }
    get lastName(){
        return this._lastName.toUpperCase();
    }
    set lastName(value){
        this._lastName=value
    }
}

const person1= new Person("Chandan","Sahoo",18)
person1.greeting()
person1.updateAge(1)
console.log(person1.age)

class Student extends Person{
    static studentCount=0
    constructor(firstName,lastName,age,id){
        super(firstName,lastName,age)
        this.studentID=id
        this.incrementStudent()
    }
    incrementStudent(){
        Student.studentCount++
    }
    greeting(){
        console.log(`Hello ${this.name} hehe`)
    }
    static totalStudent(){
        console.log(`Total Student : ${Student.studentCount}`)
    }
}

const student1 =  new Student("Chandan","Sahoo",18,123456)
console.log(student1.fullName)
console.log(student1.studentID)
console.log(student1.firstName)
student1.greeting()
const student2= new Student("Batman","WC",18,23456)
const student3= new Student("Superman","WC",18,23457)

Person.genericGreeting()
Student.totalStudent()

class Bank{
    #name
    #balance=0
    constructor(name,balance1,balance2) {
        this.#name=name
        this.depositBalance(balance1)
        this.creditBalance(balance2)
    }
    depositBalance(balance){
        this.#balance+=balance
    }
    creditBalance(balance){
        this.#balance-=balance
    }
    showBalance(balance){
        return this.#balance
    }
}

const pickie1= new Bank("Chandan",45000000,2)
console.log(pickie1.showBalance())