const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by Apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


const myArray=["js","cpp","ruby","swift"]

for(const key in myArray){
    console.log(myArray[key])
}