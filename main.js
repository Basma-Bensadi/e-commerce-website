//darkmode 
let switchBtn = document.querySelector("#switch-mode");


function enableDarkMode(){
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}
function disbleDarkMode(){
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", "inactive")
}

if(localStorage.getItem("darkmode") == "active"){
    enableDarkMode()
}
switchBtn.addEventListener("click", ()=>{
    if(document.body.classList.contains("darkmode")){
        disbleDarkMode()
    }else{
        enableDarkMode()
    }
})


//responsive navbar 
let bars = document.querySelector("#bars");
let xmark =  document.querySelector("#xmark");

bars.addEventListener("click", ()=>{
    let sidebar = document.querySelector("#sidebar");
    sidebar.style.display = "flex";
})

xmark.addEventListener("click", ()=>{
    let sidebar = document.querySelector("#sidebar");
    sidebar.style.display = "none";
})



