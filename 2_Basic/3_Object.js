// singleton
Object.create

// object literals
const mySym=Symbol("mykey1")
const JsUser={
    name:"Sahil",
    age:19,
    "Full Name":"Sahil Lohan",
   [ mySym]:"mykey1",
    location:"Jaipur",
    email:"sahil@google.com",
    isLoggedIn:false
}

// methods 1
console.log(JsUser.email)

// methods 2
console.log(JsUser["email"])

console.log(JsUser["Full Name"])
console.log(JsUser[mySym])

JsUser.email="sahil@tcs.com"
// Object.freeze(JsUser)
JsUser.email="sahil@HCL.com"
 console.log(JsUser)

 JsUser.greeting=function(){
    console.log("Hello JS User")
 }
 console.log(JsUser.greeting())

 JsUser.greetingTwo=function(){
    console.log(`Hello JS User,${this.email}`)
 }
 
 console.log(JsUser.greetingTwo())