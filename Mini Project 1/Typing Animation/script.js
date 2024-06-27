const text=document.querySelector(".sec-text");
console.log(text);
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="Freelancer";
    },0);
    setTimeout(()=>{
        text.textContent="Blogger"
    },4000);
    setTimeout(()=>{
        text.textContent="Youtube"
    },8000);
    setTimeout(()=>{
        text.textContent="Twitter"
    },12000);
}
textLoad();
setInterval(textLoad,16000)

