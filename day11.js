// const promise1= new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("I'm batman")
//         resolve()
//     },2000)
// })
// promise1.then(function(){
//     console.log("Promise consumed")
// })

// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject("Warning! Batman is on patrol")
//     },2000)
// })

// promise2.catch((error)=>{
//     console.log(error)
// })

// new Promise((resolve,reject)=>{
//     // const data={
//     //     username: "Chandan",
//     //     email: "chandansahoo02468@gmail.com",
//     //     passowrd : "Batman"
//     // }
//     const data=false
//     if(data) resolve(data)
//     else reject("No info found")
// }).then((user)=>{
//     return {username: user.username,email: user.email}
// }).then((user)=>{
//     console.log(user)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Work has been done")
// })

// const Promise3 = new Promise((resolve,reject)=>{
//     const data={
//         username: "Chandan",
//         email: "chandansahoo02468@gmail.com",
//         passowrd : "Batman"
//     }
//     // const data=false
//     if(data) resolve(data)
//     else reject("No info found")
// })

// async function consumePromise(){
//     try{
//         const promise = await Promise3
//         console.log(promise)
//     }
//     catch(error){
//         console.log(error)
//     }

// }
// consumePromise()

// fetch('https://randomuser.me/api/')
// .then((res)=> res.json())
// .then((res)=>{
//     console.log(res)
// })

// function fetchling(){
//     const data=true;
//     if(data) return fetch('https://randomuser.me/api/')
//     else return
// }

// async function consumeFetch(){
//     try{
//         const data=await fetch('https://randomuser.me/api/')
//         console.log(data)
//     }
//     catch{
//         console.log("No data")
//     }
// }

const promise1 = new Promise((resolve,reject)=>{
    const flag=true;
    if(flag){
        setTimeout(()=>{
            resolve("ehm")
        },1000)
    }
    else reject("Nah")
})

const promise2 = new Promise((resolve,reject)=>{
    const flag=true;
    if(flag){
        setTimeout(()=>{
            resolve("ehm")
        },2000)
    }
    else reject("Nah")
})

const promise3 = new Promise((resolve,reject)=>{
    const flag=true;
    if(flag){
        setTimeout(()=>{
            resolve("ehm")
        },3000)
    }
    else reject("Nah")
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
})
.catch((error)=>{
    console.log(error)
})

Promise.race([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
})
.catch((error)=>{
    console.log(error)
})

