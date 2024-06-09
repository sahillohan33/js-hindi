// for of 

const arr=[1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const greeting="Hello World"

for (const greetings of greeting) {
        console.log(`Each char is ${greetings}`);
}

// Maps

const map= new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map)
for (const [key,value] of map) {
    console.log(key,':-', value)   
}

// object is not iterable
/* const myObject={
    'game':'NFS',
    'game2':'Spiderman'
}
for (const key of myObject) {
    console.log(key)
}
    */