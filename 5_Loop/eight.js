
const myNums=[1,2,3,4,5,6]

// const initialvalue=0

const total=myNums.reduce((acc,curValue)=>{
    console.log(`acc :${acc} and current value : ${curValue}`)
    return acc+curValue
},0
//,3
)
console.log(total)


const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"java course",
        price:3999
    },
    {
        itemName:"python course",
        price:3999
    },
    {
        itemName:"Node.js course",
        price:3599
    }
]

const totalPrice=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(totalPrice)