let cartbtn = document.getElementById("cart-btn");
cartbtn.addEventListener("click", ()=>
    {
        let cart  = document.getElementById("cart");
        cart.style.display = 'flex'
    })


let xmark = document.getElementById("cart-xmark");
xmark.addEventListener("click", ()=>{
    let cart = document.getElementById("cart");
    cart.style.display = "none";
})

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


//the website real logic

//grabbing html elements , buttons cart and total display 
const addingBtns = document.querySelectorAll(".adding-btn");
const cart = document.getElementById("cart");
const totalDisplay = document.getElementById("total");
let total = 0 ; 
// looping throgh the buttons 

addingBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        cart.style.display = "flex"; 
        let productdiv = button.closest(".product");
        let productName = productdiv.querySelector(".product-name").textContent;
        let productPriceTxt = productdiv.querySelector(".price").textContent;
        let productprice = parseFloat(productPriceTxt.replace("$",""));

        let item = document.createElement("li");
        let itemName = document.createElement("p")
        let itemPrice = document.createElement("p")
        let itemxmark  =  document.createElement("button");

        item.classList.add("item");
        itemName.textContent = productName;
        itemPrice.textContent = productprice;
        itemxmark.textContent = "X"

        item.appendChild(itemName);
        item.appendChild(itemPrice);
        item.appendChild(itemxmark);
        cart.appendChild(item);
        
        total += productprice;
        totalDisplay.textContent = total.toFixed(2);
        

        itemxmark.addEventListener("click",()=>{
            let theitem = itemxmark.parentElement
            theitem.remove();
            total-= productprice 
            totalDisplay.textContent = total.toFixed(2);
    })
})
})


//filtering : 

let filteringbuton = document.querySelectorAll(".filter-btn");
let prodcts = document.querySelectorAll(".product");

filteringbuton.forEach((button)=>{
    button.addEventListener("click",()=>{
        let filter = button.dataset.filter;
        prodcts.forEach((product)=>{
            let category = product.dataset.category;
            if(filter =="all" ){
                product.style.display = "flex";
            }
            else if(filter == category){
                product.style.display = "flex";
            }
            else{
                product.style.display = "none";
            }
    
        }) 
    })
})