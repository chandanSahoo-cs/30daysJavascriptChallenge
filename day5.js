function oddAndEvenCheck(num1){
    if(num1%2==0){
        console.log(`${num1} is a even number`)
    }
    else console.log(`${num1} is a odd number`)
}
oddAndEvenCheck(2)

function sqaure(num){
    console.log(`Sqaure of ${num} : ${num*num}`)
}
sqaure(2)

function max(num1,num2){
    if(num1>num2) console.log(`Max of ${num1} & ${num2} : ${num1}`)
    else console.log(`Max of ${num1} & ${num2} : ${num2}`)
}
max(4,5)

function stringAdd(s1,s2){
    console.log(s1+s2);
}
stringAdd("Chandan ","Sahoo")

let add = (num1,num2)=>{
    console.log(`Sum of ${num1} & ${num2} : ${num1+num2}`)
}
add(10,1)

let charCheck =(s,char)=>{
    for(let i=0;i<s.length;i++){
        if(s[i]==char) return true;
    }
    return false;
}
console.log (charCheck("Chandan",'a'))
console.log(charCheck("Chandan",'e'))

function product(num1, num2=11){
    console.log(`Product of ${num1} & ${num2} : ${num1*num2}`)
}
product(1)

function greeting (name,age=18){
    console.log(`Hello, ${name}`)
}
greeting("Chandan")


function callByNumber(fn1,num){
    while(num>0){
        fn1("Chandan")
        num--;
    }
}
callByNumber(greeting,5)

const sqaure2= num => num*num
const cube= num => num*num*num
function mismatch(fn1,fn2,num){
    return fn2(fn1(num))
}
console.log(mismatch(sqaure2,cube,2))
