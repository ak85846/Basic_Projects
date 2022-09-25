const nextE1=document.querySelector(".next");
const prevE1=document.querySelector(".prev");
const imagecontainerE1=document.querySelector(".image-container")
const imageE1=document.querySelectorAll("img");
let currentimage=1;
let timeout;
nextE1.addEventListener("click",()=>{
    currentimage++;
    clearTimeout(timeout);
    updateimg();
});

prevE1.addEventListener("click",()=>{
    currentimage--;
    clearTimeout(timeout);
    updateimg();
});
updateimg();

function updateimg(){
    if(currentimage>imageE1.length){
        currentimage=1;
    }
    else if(currentimage<1){
        currentimage=imageE1.length;
    }
    imagecontainerE1.style.transform=`translateX(-${(currentimage-1)*500}px)`;

    timeout=setTimeout(()=>{
        currentimage++;
        updateimg();
    },3000)

}