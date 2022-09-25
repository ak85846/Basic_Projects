const tabsE1=document.querySelector(".tabs");
const buttonsE1=document.querySelectorAll(".button");
const articlesE1=document.querySelectorAll(".content");
tabsE1.addEventListener("click",(event)=>{
const id=event.target.dataset.id;

    if(id){
        buttonsE1.forEach((btn)=>{
            btn.classList.remove("live");
        })
        event.target.classList.add("live");
       articlesE1.forEach((article)=>{
        article.classList.remove("live")
       }) 
       const element=document.getElementById(id);
       element.classList.add("live");
    }

})