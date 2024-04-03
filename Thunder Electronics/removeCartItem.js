import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const removeCartItem = (id)=>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((currentProduct) => currentProduct.id !=id);
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    let RemoveDiv = document.getElementById(`card${id}`);
    if(RemoveDiv){
        RemoveDiv.remove();
    }
    updateCartProductTotal();
};