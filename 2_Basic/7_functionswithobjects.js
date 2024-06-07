function calculateCartPrice(val1,val2,...num1)  // function calculateCartPrice(...num1)
{
    return num1
}
console.log(calculateCartPrice(2,300,400,2000))


const user={
    username:"Sahil",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))