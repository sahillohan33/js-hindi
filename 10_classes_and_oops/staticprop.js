
// String Property 

class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    // static error show
   static createId(){       
        return `123`   // suppose random id number
    }
}
const sahil=new User("Sahil")
// console.log(sahil.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iPhone=new Teacher("Iphone","phone@gmail.com")
iPhone.logMe()