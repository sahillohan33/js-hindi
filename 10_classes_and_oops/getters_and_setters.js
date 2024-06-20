
class User{
    constructor(email,password){
        this.email = email;
        this.password = password;

    }

    get email(){

        return this._email.toUpperCase();
    }

    set email(value){
        return this._email=value; 
    }
    get password(){

        // return this._password.toUpperCase();
        return `${this._password}sahil`

    }

    set password(value){
        this._password = value.toUpperCase(); 
    }
}
const sahil = new User("sahil@gmail.com","abc");

console.log(sahil.password);
console.log(sahil.email)