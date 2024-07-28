export function add1(num1,num2){
    return num1+num2;
}

export function sub(num1,num2){
    return num1-num2
}

export function multiply(num1,num2){
    return num1*num2
}

export function divide(num1,num2){
    if(num2===0) throw new Error("Give a valid denominator")
    else return num1/num2;
}