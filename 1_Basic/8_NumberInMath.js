//  ******************************* Score  ***************************************
const score=400

console.log(score);

const balance=new Number(100)

console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const otherNumber=123.8978

console.log(otherNumber.toPrecision(3));

const hundreds=10000000

console.log(hundreds.toLocaleString('en-IN'))


// *********************************************** Maths *********************************************************

console.log(Math)

console.log(Math.abs(-4)); // means -ve value convert into +ve value but +ve value not convert into -ve value

console.log(Math.round(4.6)); // Output 5

console.log(Math.ceil(4.2))      // output 5

console.log(Math.floor(4.3))      // output 4


console.log(Math.random())     

console.log((Math.random()*10)+1)

console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

// console.log(Math.random()*(max-min+1));

console.log(Math.floor(Math.random()*(max-min+1)))