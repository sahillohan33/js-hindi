
const coding=["js","ruby","java","python","cpp"]

coding.forEach( function (item){
    console.log(item)
})

coding.forEach((val)=>{
    console.log(val)
})

function printMe(val){
    console.log(`Function callback forEach Loop ${val}`)
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})



const myArray=[
    {
        languageName:"JavaScript",
        languageFileName:".js"
    },
    {
        languageName:"Java",
        languageFileName:".java"
    },
    {
        languageName:"Python",
        languageFileName:".py"
    }
]
myArray.forEach((item)=>{
    console.log(item);
})