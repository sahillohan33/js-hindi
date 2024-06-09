// for loop

/*
for (let index = 0; index < 10; index++) {
    const element = index;
 //    console.log(element)
 if(element==5){
    console.log("5 is best number");
 }
 else{
    console.log(element)
 }
}
 */

/*
for(let i=0;i<=10;i++){
    console.log(`outer loop value:${i}`)
    for(let j=0;j<=10;j++){
        // console.log(`inner loop value:${j} and  inner loop ${i}`)
        console.log(i +'*'+ j+'=' + i*j);
    }
}

*/

let myArray=["flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(`Loop is : ${element}`)
}

// break and contintue
console.log(`Break Statement`)
for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`Detected 5`)
        break;
        
    }
    else{
    console.log(`Value of i is   ${index}`)
    }
    
}
console.log(`Continue Statement`)
for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`Detected 5`)
        continue;
        
    }
    else{
    console.log(`Value of i is   ${index}`)
    }
    
}