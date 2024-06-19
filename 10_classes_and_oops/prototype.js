
// let myName="Sahil    "

// console.log(myName.trueLength())


let myHero=["thor","spiderman"]

let heroPower={
    throw:"hammer",
    spiderman:"sling",

    getSpiderPower:()=>{
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

Array.prototype.saySahil=()=>{
    console.log(`Sahil say Hello`)
}

Object.prototype.sahil=()=>{
    console.log(`Sahil is present in all objects`)
}
// heroPower.sahil()

// heroPower.saySahil() // not access 
myHero.saySahil()


const User={
    name:"Sahil",
    email:"sahil@gmail.com"
}

const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullName:true,
    __proto__: TeachingSupport
}
Teacher.__proto__= User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="AmanLohan"

String.prototype.trueLength = function(){
    
    console.log(`${this}`);
    // console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`)
}


anotherUsername.trueLength()
"sahil".trueLength()
"iceTea".trueLength()

