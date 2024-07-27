const errorIncoming = () =>{
    throw Error("Error is here")
}
try{
    console.log(errorIncoming())
}
catch(error){
    console.log(error)
}

const divide= (num1,num2)=>{
    if(num2==0) throw Error("Denominator is 0")
    else return num1/num2
}

try{
    console.log(divide(4,2))
}
catch(error){
    console.log(error)
}

try{
    console.log(divide(2,0))
}
catch(error){
    console.log(error)
}
finally{
    console.log("Work has been done")
}

class customError extends Error{
    constructor(message){
        super(message)
        this.name="Custom Error"
    }
}
const riskyFunction =()=>{
    throw new customError("Batman is here")
}
try{
    riskyFunction()
}
catch(error){
    if(error instanceof customError){
        console.log(error)
    }
}
const nameCheck=(name)=>{
    if(name==='') throw Error("Please give a valid name")
    else console.log(name);
}

try{
    console.log(nameCheck(""))
}
catch(error){
    console.log(error)
}

const promise1 = new Promise((resolve,reject)=>{
    const data=true;
    if(data) resolve("2")
    else reject("There is a error")
})

promise1.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})

async function consumePromise(){
    try{
        const data=promise1()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

fetch('https://randomuser.me/api/').then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})

async function consumeFetch(){
    try{
        const data=await fetch('https://randomuser.me/api/')
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
consumeFetch()