// array

const myArr=[0,11,2,33,4,5,6,7]

const myHero=["Sahil","Aman"]

const myArr2=new Array(2,3,4,5,6,7,8,9)

console.log(myArr[2])

// Array Methods

// myArr.push(12)   // add element at the end

// myArr.pop()     // delete last elements

/* myArr.unshift(8)    // add element at the start end
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(7))  // Result m either true/false

console.log(myArr.indexOf(11)) 
*/

const newArr=myArr.join()
console.log(myArr)
console.log(typeof myArr);

console.log(newArr);
console.log(typeof newArr);       // join methods type of array string

// *********************************  slice and splice **************************************************

console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log();
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2)

