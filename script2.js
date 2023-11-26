const menu = document.getElementById("mobile-menu")
const btn = document.getElementById("menu-btn")

btn.addEventListener("click", ()=>{
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
    }
    else{
        menu.classList.add("hidden")
    }
    
})