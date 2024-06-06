const marvel_heros=["thor","Ironman","Spiderman"]

const dc_heros=["superman","flash","Batman"]

 //marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)


const all_new_Heros=[...marvel_heros,...dc_heros]
// console.log(all_new_Heros)

const anotherArrays=[1,2,3,[4,5,[6,7]],[2,6,8,9,[10,12,13,14]]]
const real_anotherArrys=anotherArrays.flat(Infinity)
console.log(real_anotherArrys)



console.log(Array.isArray("sahil"))
console.log(Array.from("sahil"))

console.log(Array.from({
    name:"Sahil",
    age:23
}))    // return empty array



let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
