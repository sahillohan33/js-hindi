
class User{
    constructor(username){
        this.username=username

    }
    logMe(){
        console.log(`USERNAME IS : ${this.username}`);
    }

}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new Course was added by ${this.username}`)
    }

}

const sahil=new Teacher("Sahil","sy@gmail.com","123")
sahil.addCourse()

const masalChai=new User("masalaChai")
masalChai.logMe()

console.log(sahil===masalChai) // false

console.log(sahil===Teacher) // false

console.log(sahil instanceof User) // true