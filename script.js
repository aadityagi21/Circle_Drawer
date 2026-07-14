const body = document.querySelector("body");
const extButton = document.querySelector(".extButton");
const ext = document.querySelector(".ext"); 
const clearButton = document.querySelector(".clearButton");
const animationButton = document.querySelector(".animationButton");
const circleColor = document.querySelector(".circleColor");
const colorPicker = document.querySelector(".colorPicker");
let extOn = false;
let animationOn = false;

body.addEventListener("pointermove",(e)=>{
    createCircle(e);
});


extButton.addEventListener("click",()=>{
    extension();
});

clearButton.addEventListener("click",()=>{
    clearCircles();
})

circleColor.addEventListener("click",()=>{
    colorPicker.click();
    
})

colorPicker.addEventListener("input",()=>{
    currentColor = colorPicker.value;
    changeCircleColor(currentColor);
})


function changeCircleColor(currentColor){
    document.querySelectorAll(".boxClass").forEach((circle)=>{
        circle.style.borderColor = currentColor;
    })
}


function clearCircles(){
    document.querySelectorAll(".boxClass").forEach((circle)=>{
        circle.remove();
    })
}


function extension(){
    if(extOn === false){
        ext.style.visibility = "visible";
        extOn = true;
    }
    else{
        ext.style.visibility = "hidden";
        extOn = false;
    }
}


function createCircle(e){
    let box = document.createElement("div");

    if(animationOn === true){
        box.style.animation = "boxAnimation 1s infinite alternate";
        // animationOn = false;
    }

    body.appendChild(box);
    box.classList.add("boxClass");
    box.style.left = e.clientX - 50 + "px";
    box.style.top = e.clientY - 45 + "px"; 


}

animationButton.addEventListener("click",()=>{
    clearCircles();
    if(animationOn === false){
        animationOn = true;
    }
    else{
        animationOn = false;
    }

});


