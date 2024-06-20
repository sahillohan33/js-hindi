// ES6

class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encrytPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const sahil=new User("sahil","example@gmail.com","123")
console.log(sahil.encrytPassword());
console.log(sahil.changeUsername());

// Behind the scene

function User1(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User1.prototype.encrytPassword=()=>{
    return `${this.password}abc`   
}

const chai=new User("Tea","tea@gmail.com","123")

console.log(chai)