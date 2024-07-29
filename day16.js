function factorial(num1){
    if(num1==1) return 1;
    return num1*factorial(num1-1)
}
console.log(factorial(5))

function fibonacciSeries(num1){
    if(num1==0) return 0;
    if(num1==1) return 1;
    return fibonacciSeries(num1-1)+fibonacciSeries(num1-2)
}
console.log(fibonacciSeries(10))

function addArray(array,n){
    if(n===0) return array[n]
    return array[n]+addArray(array,--n)
}

console.log(addArray([1,2,3,4,5,6,7,8,9,10],9))

function max(num1,num2){
    if(num1>num2) return num1
    return num2
}
function maxEle(array,n){
    if(n===0) return array[n]
    return max(array[n],maxEle(array,--n));
}
console.log(maxEle([3,5,4,6,1,2,11,10,8,9],9))


function reverseString(str,num1,temp){
    if(temp>num1/2) return str;
    let arr=str.split('');
    [arr[temp],arr[num1-temp-1]]=[arr[num1-temp-1],arr[temp]]
    return reverseString(arr.join(''),num1,++temp)
}
console.log(reverseString("Pikachu",7,0))

function pallindromeCheck(str,num1,temp){
    if(temp>num1/2) return true
    let arr=str.split('')
    if(arr[temp]!=arr[num1-temp-1]) return false;
    return pallindromeCheck(arr.join(''),num1,++temp)
}
console.log(pallindromeCheck("racecar",7,0))

function binarySearch(array,target,s,e){
    if(s>e) return false;
    let m=Math.floor(s+(e-s)/2)
    if(array[m]==target) return true;
    else if(array[m]>target) return binarySearch(array,target,s,m-1)
    else if(array[m]<target) return binarySearch(array,target,m+1,e)
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],11,0,9))

function targetCnt(array,target,num,ind,cnt){
    if(ind>num) return cnt
    if(array[ind]==target) ++cnt
    return targetCnt(array,target,num,++ind,cnt)
}
console.log(targetCnt([1,2,1,1,1,1,1,],2,6,0,0))