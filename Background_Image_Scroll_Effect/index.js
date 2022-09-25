 const bgimgE1=document.getElementById("bg-img");

window.addEventListener("scroll",()=>{
  updateImg();
});

function updateImg(){
    //divide by 900 so that it's value can be ess than 1.
    bgimgE1.style.opacity=1-window.pageYOffset / 900;
    // divide by 12 so that it's value can be ess than 160.
    bgimgE1.style.backgroundSize=160-window.pageYOffset / 12 +"%";
}
