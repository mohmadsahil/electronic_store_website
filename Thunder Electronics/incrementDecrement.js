import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event,id,stock,price)=>{
    
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".product_qyt");
    const product_price = currentCardElement.querySelector(".addToCardProductPrice");

    let Quantity = 1;
    let localStoragePrice = 0;

    let LocalStorageProduct = getCartProductFromLS();
    let existingproduct = LocalStorageProduct.find((curProd)=>curProd.id == id);

    if(existingproduct){
        Quantity = existingproduct.Quantity;
        localStoragePrice = existingproduct.price
    }
    else{
        localStoragePrice = price;
    }

    if(event.target.className == "cart_increment"){
        if(Quantity < stock){
            Quantity += 1;
        }
        else if(Quantity == stock){
            Quantity=stock;
            localStoragePrice = price * stock;
        }
    }

    if(event.target.className == "cart_decrement"){
        if(Quantity>1){
            Quantity -= 1;
        }
    }

    //Finally Update the Price in LocalStorage

    localStoragePrice = price * Quantity;

    let updatedCart = { id , Quantity , price : localStoragePrice};
    updatedCart = LocalStorageProduct.map((currentClickCard)=>{
        return currentClickCard.id == id ? updatedCart : currentClickCard;
    });

    localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));

    productQuantity.innerText = Quantity;
    product_price.innerText = `₹${localStoragePrice}`;
    updateCartProductTotal();
}
