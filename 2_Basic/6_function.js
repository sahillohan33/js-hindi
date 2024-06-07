
function sayMyName(){
    console.log("S")
    console.log("A")
    console.log("H")
    console.log("I")
    console.log("L")
}
sayMyName()

/*
function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
const result=addTwoNumbers(2,3)
console.log("Result is ",result)    // output : undefined
*/
function addTwoNumbers(number1,number2){
    let result= number1+number2
    console.log("Sahil Lohan")
    return result
   //  console.log("Sahil Lohan")    /* Unreachable code detected.   */
}

const result=addTwoNumbers(7,3)
console.log("Result is ",result)    // output : undefined


function loginUserMessage(username){
    if(username===undefined) //  if(!username){console.log("Please enter a username") return }
    
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sahil"))

