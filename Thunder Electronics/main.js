import products from "./Api/products.json";
import { showProductsContainer } from "./homeProductsCards";


// **************HAMBURGER*******************

let Hamburger_icon = document.querySelector(".Hamburger-icon");
let All_ul = document.querySelector("ul");

Hamburger_icon.addEventListener("click",()=>{
    All_ul.classList.toggle("showData")
    console.log(All_ul);
})


// **************************************************************

// call the function to fetch the Data from API and render into cads

showProductsContainer(products);