
const name= "Sahil"
const repoCount=50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// other method

const gameName=new String('Temple-Run')

console.log(gameName);

// key pair value access

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length); // length string 

console.log(gameName.search('T'))   // output = 0
console.log(gameName.search('U')) // Output = -1

console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf('T'))

/* const newString=gameName.substring(2,6)
console.log(newString)
*/
const otherString =gameName.slice(-7,-1)
console.log(otherString)

const newStringOne="      Sahil@gmail.com"
console.log(newStringOne.trim())

const url="https://sahillohan.com/sahil%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('sahil'));

console.log(gameName.split('-'))
