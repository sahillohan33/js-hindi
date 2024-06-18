const promiseOne=new Promise((resolve,reject)=>{
    // do an async task
    // DB calls, cryptography , network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumer")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sahillohan",email:"sahillohan12@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=false  // error=true output : ERROR: Something went wrong!
       if(!error){
        resolve({username:"Sahil",password:"123"})

       }
       else{
        reject("ERROR: Something went wrong!")
       } 
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("The promise is either resolved or rejected")
})



const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true  // error=true output : ERROR: JS went wrong!
        if(!error){
         resolve({username:"javascipt",password:"js@123"})
 
        }
        else{
         reject("ERROR: JS went wrong!")
        } 
     },1000)  
})

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// fetch api

/* 
async function getAllUser(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
       
         const data=await response.json()
        console.log(data)
    }
    catch(error){
        console.log("Error:",error)
    }
}
getAllUser()
*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
}) 
.catch((error)=>{console.log("Error:",error)})