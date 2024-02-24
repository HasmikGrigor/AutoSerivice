"use strict"
let images=document.querySelectorAll(".image");
let btn=document.querySelector(".btn")
window.addEventListener("scroll",function(){
    let screenHeight=window.innerHeight;
    console.log(screenHeight)
    
    images.forEach(function(image){
        let imageTop=image.getBoundingClientRect()
        
        if(imageTop.top<screenHeight-100){
            image.classList.add("rotatebox")
        }else{
            image.classList.remove("rotatebox")
        }
    })
})


if(!localStorage.theme){
    localStorage.setItem("theme","light");

}
document.body.className=localStorage.theme;
if(localStorage.theme=="dark"){
    btn.innerHTML='<i class="fa-solid fa-sun"></i>'
}else{
    btn.innerHTML='<i class="fa-solid fa-moon"></i>'
}

btn.addEventListener("click",function(){
    if(localStorage.theme=="light"){
        document.body.className="dark";
        btn.innerHTML='<i class="fa-solid fa-sun"></i>';
    }else{
        document.body.className="light";
        btn.innerHTML='<i class="fa-solid fa-moon"></i>'

    }
    localStorage.theme=document.body.className
})