// const box = document.querySelector(".box");
const body = document.querySelector("body");
 
body.addEventListener("mousemove",(e)=>{
    let box = document.createElement("div");
    body.append(box);
    box.classList.add("boxClass");
    box.style.left = e.clientX - 50 + "px";
    box.style.top = e.clientY - 45 + "px"; 

    // if(body.childElementCount%2==0){
    //     box.style.background = "blue";
    // }
    
});
    