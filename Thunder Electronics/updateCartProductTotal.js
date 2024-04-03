import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const updateCartProductTotal = ()=>{
    let productOrderSubTotalPrice = document.querySelector(".productOrderSubTotalPrice")
    let productOrderFinalTotalPrice = document.querySelector(".productOrderFinalTotalPrice")


    let LocalStorageProduct = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = LocalStorageProduct.reduce((accum,curElem)=>{

        let productPrice = parseInt(curElem.price) || 0; 
        return accum + productPrice;
    },initialValue);
    
    productOrderSubTotalPrice.textContent = `₹${totalProductPrice}`;
    productOrderFinalTotalPrice.textContent =  `₹${totalProductPrice + 50}`;
}

updateCartValue(updateCartProductTotal);

