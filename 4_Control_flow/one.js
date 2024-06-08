// if

const isUserLoggedIn=true
const temperature=41

if(temperature<50){
    console.log("Less than 50")
}
else{
    console.log("Temperature is greater than 50");
}
if(2!=3){
    console.log("Executed");
}


const score=200
if(score>100){
    var power="fly"
    console.log(`User power:${power}`);
}
console.log(`User power:${power}`)

const balance=1000

// if(balance>500) console.log("Test"),console.log("Test2")

    if(balance<500){
        console.log("Less than 500");
    }
    else if(balance<750){
        console.log("less than 750")
    }
    else if(balance<900){
        console.log("less than 900")
    }
    else{
        console.log("less than 1200")
    }

    const userLoggedIn=true
    const debitCard=true
    const loggedInFromGoogle=false
    const loggedInFromEmail=true

    if(userLoggedIn&&debitCard&&2==2){
        console.log("Allow to buy course")
    
    }

    if(loggedInFromGoogle || loggedInFromEmail){
        console.log("User Logged In")
    }
// <,>,<=,>=,==,!=,===