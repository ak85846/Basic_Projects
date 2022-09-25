const containerE1=document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerE1=document.createElement("div");
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);    
}
// colorContainerE1 only have the one container while colorContainerAllE1 have all the 30 container
const colorContainerAllE1=document.querySelectorAll(".color-container");
generatecolors();
function generatecolors(){
    colorContainerAllE1.forEach((colorContainerE1)=>{
    const newColorcode=randomColor();
    colorContainerE1.style.backgroundColor="#"+newColorcode;
    colorContainerE1.innerText="#"+newColorcode;
    })
}

function randomColor(){
    const chars="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode="";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum=Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(randomNum,randomNum+1);   
    }
return colorCode;
}