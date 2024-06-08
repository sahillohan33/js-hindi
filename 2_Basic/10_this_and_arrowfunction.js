
 const user= {
    username:"Sahil",
    price:88,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
 }
 // user.welcomeMessage()

 // user.username="Sohit"

 // user.welcomeMessage()

 // console.log(this)

/*
 function sahil(){
    console.log(this)
 }
 sahil()
 */

 /*
 const chai=function(){
    console.log(this.username)
 }
 chai()
 */

 // arrow function
/*
 const chai=()=>{
    console.log(this.username)
 }
 chai()
*/
 const addTwo=(num1,num2)=> (num1 + num2)
 
 console.log(addTwo(3,4))
 
