"use strict";
let progress=document.querySelector(".progress-mini")
window.addEventListener("scroll",function(){
    let allHeight=document.body.scrollHeight-document.documentElement.clientHeight;
    let winscroll=window.pageYOffset
    progress.style.width=winscroll*100/allHeight+"%"
})