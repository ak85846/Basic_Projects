const imagecontainerE1=document.querySelector(".image-container");
const btnE1=document.querySelector(".btn");
btnE1.addEventListener("click",()=>{
    imageNum=10;
   addNewimage();
})
function addNewimage(){
    for (let index = 0; index < imageNum; index++) {
    const newimgE1=document.createElement("img");
    newimgE1.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imagecontainerE1.appendChild(newimgE1);
        
    }
}