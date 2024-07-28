function add1(num1){
    return function (num2){
        return num1+num2
    }
}
const fxn=add1(2)
const ans=fxn(3)
console.log(ans)

function createCounter(){
    let counter=0;
    return {
        increment: ()=> counter++,
        getValue: ()=>{
            console.log(`Counter: ${counter}`)
        }
    }
}

const counter= createCounter()
counter.increment()
counter.increment()
counter.getValue()

function uniqueID(){
    let id;
    return function (){
        id=Math.floor(Math.random()*10+1)
        return id
    }
}
const myID=uniqueID();
console.log(myID())
console.log(myID())
console.log(myID())

function user(name){
    let username=name
    return function(){
        return `Name: ${username}`
    }
}

const myUser=user("Chandan")
console.log(myUser())

const functionArray=[]

for(let i=0;i<10;i++){
    functionArray.push(()=>{
        console.log(i)
    })
}
functionArray.forEach(fn=>fn())


function collection(){
    const st= new Set()
    function add1(ele){
        st.add(ele)
    }
    function remove(ele){
        st.delete(ele)
    }
    function listItems(){
        st.forEach(ele=>{
            console.log(ele)
        })
    }

    return {
        add :add1,
        delete :remove,
        items :listItems
    }
}

const myCollection=collection()
myCollection.add("Chandan")
myCollection.add("Batman")
myCollection.add("Superman")
myCollection.add("Noob")
myCollection.delete("Noob")
myCollection.items()

function store(fn){
    const mp= new Map()
    return function(...args){
        const key=String(args)
        if(mp.has(key)){
            return mp.get(key)
        }
        const result=fn(...args)
        mp.set(key,result)
        return result
    }
}
function square(num1){
    return num1*num1
}

const str=store(square)
console.log(str(4))
console.log(str(4))
console.log(str(5))
console.log(str(5))

function factorial(num1){
    if(num1==1) return 1;
    return num1*factorial(num1-1)
}
const str2=store(factorial)
console.log(str2(5))
console.log(str2(5))
console.log(str2(4))
console.log(str2(4))