// singleton

// const tinderUser= new Object()

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sonika"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sahil",
            lastname:"Lohan"
        }
    }

}

console.log(regularUser.fullname);
console.log(regularUser.fullname?.userfullname.lastname);

const obj1={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}

const obj2={
    5:"a",
    6:"b"
}

// const obj3={ obj1 , obj2}
 /*
output: {
    obj1: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' },
    obj2: { '5': 'a', '6': 'b' }
  }
  */

// const obj3 = Object.assign({},obj1,obj2)
/*
Output:
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'b' }
*/

const  obj3 = {...obj1,...obj2}
/*
output :
 
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'b' }
*/
console.log(obj3);


const users=[
 {
    id:1,
    email:"a@gmail.com"
 },
 {
    id:2,
    email:"b@gmail.com"
 },
 {
    id:3,
    email:"c@gmail.com"
 },
 {
    id:4,
    email:"d@gmail.com"
 }
 
]
console.log(users[1].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser))   // return array 

console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



