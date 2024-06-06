// Dates

let myDate=new Date()

console.log(myDate)

console.log(myDate.toString())

console.log(myDate.toDateString())

console.log(myDate.toISOString())

console.log(myDate.toLocaleDateString())

console.log(myDate.toLocaleString())

console.log(typeof myDate)     // Object   Interview Question

let myCreatedDate=new Date(2023,0,23)  // Month start 0 in js
console.log(myCreatedDate.toDateString())

// Time
let myTimeStamp=Date.now()

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()

console.log(newDate);

console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"Long",
    
})