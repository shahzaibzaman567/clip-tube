let menu=document.querySelector("#menu");
let sidebar=document.querySelector(".side-bar");
let container=document.querySelector('.container');

menu.addEventListener("click",()=>{

    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle('large-container')
})