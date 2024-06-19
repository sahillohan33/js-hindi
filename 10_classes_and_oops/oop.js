const user={
    username:"Sahil",
    loginCount:8,
    singnedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database") 

        // console.log(`Username : ${this.username}`)
        console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())  // output: undefined
// console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isloggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome to ${this.username}`)
    }
   return this
}

const userOne=new User("Sahil",12,true)
const userTwo= new User("Aman",11,false)

console.log(userOne.constructor)

// console.log(userOne)

console.log(userTwo)