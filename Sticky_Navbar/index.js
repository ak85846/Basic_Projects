const navbarE1=document.querySelector(".navbar");

const bottomContainerE1=document.querySelector(".bottom-container");
// the whole point is we calculate the bottomcontainer top offset and navbar height and the margin is 50 given to the text class and using this we got the window point at which we want to add active class
window.addEventListener("scroll",()=>{
    if(window.scrollY>bottomContainerE1.offsetTop-navbarE1.offsetHeight-50){
        navbarE1.classList.add("active");
    }
    else{
        navbarE1.classList.remove("active");
    }
})