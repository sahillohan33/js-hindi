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
console.log(user.username)
console.log(user.getUserDetails())  // output: undefined