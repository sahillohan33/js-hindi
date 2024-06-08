
(function chai(){
    console.log(`DB Connected`)
})();

(function chai1(){
    // named IIFE
    console.log(`DB CONNECTED TWO`)
})();

((name)=>{
    // unnamed IIFE
    console.log(`DB Connected Two ${name}`);
})('sahil')