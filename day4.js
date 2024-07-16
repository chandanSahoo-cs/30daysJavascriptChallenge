console.log("Numbers from 1 to 10 : ")
for(let i=1;i<=10;i++){
    console.log(i)
}

console.log("Multiplication table of 5")
for(let i=1;i<=10;i++){
    console.log(5*i)
}
let i=1,sum=0;
while(i<=10){
    sum+=i
    i++;
}
console.log(`Sum of numbers from 1 to 10: ${sum}`)

console.log("Numbers from 10 to 1 : ")
let j=10
while(j>0){
    console.log(j)
    j--
}
console.log("Numbers from 1 to 5 : ")
let k=1
do{
    console.log(k)
    k++
}
while(k<=5);
let n=5
let num=n
let product=1;
do{
    product*=num
    num--;
}while(num>0);
console.log(`Factorial of ${n} : ${product}`)

console.log("Star pattern : ")

for(let i=0;i<n;i++){
    let s="";
    for(j=0;j<i+1;j++){
        s+="*"
    }
    console.log(s);
}

console.log("Number from 1 to 10, skipping 5 : ");
for(let i=1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
}
console.log("Number from 1 to 10, stopping before 7 : ");
for(let i=1;i<=10;i++){
    if(i==7) break;
    console.log(i);
}

