// Primitive 
// 7 types :String ,Number ,Boolean, null , undefined, Symbol , BigInt

const score=200
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

// symbol

const id=Symbol('123')
const anotherId=Symbol('123')


console.log(id===anotherId);

const bigNumber=3456789123456789n
console.log(bigNumber)
// Reference (Non primitive)
// array,objects,functions

const hero=["shaktiman","naagraj","doga"]
console.log(hero);

let myObj={
    name:"Sahil",
    age:32,
}
console.log(myObj);

const myFunction= function(){
    console.log("hello World");
}

console.log(typeof outsideTemp);