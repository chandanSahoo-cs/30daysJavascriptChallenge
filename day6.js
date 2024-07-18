const arr1=[1,2,3,4,5]
console.log(arr1);
console.log(`First element : ${arr1[0]}`)
console.log(`Last element : ${arr1[4]}`)

arr1.push(6)
console.log(`Updated Array : [${arr1}]`)
arr1.pop()
console.log(`Updated Array : [${arr1}]`)
arr1.shift()
console.log(`Updated Array : [${arr1}]`)
arr1.unshift(1)
console.log(`Updated Array : [${arr1}]`)

const  arr2=arr1.map(ele=>2*ele)
console.log(`Updated Array : [${arr2}]`)
const arr3=arr1.filter(ele=>ele%2==0)
console.log(`Updated Array : [${arr3}]`)
const sum=arr1.reduce((acc,curr)=>acc+curr,0)
console.log(`Sum of array : ${sum}`)

for(let i=0;i<5;i++) console.log(arr1[i]);
console.log("\n")
arr1.forEach((ele)=>console.log(ele))

const multiArr=[[1,2,3],[4,5,6],[7,8,9]];
console.log(multiArr)

console.log(`Specific element from the array : ${multiArr[1][1]}`)