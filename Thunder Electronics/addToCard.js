import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event,id,stock)=>
{
    let arrLocalStorageProduct = getCartProductFromLS();          //LS-->Local Storage

    const currentClickCard = document.querySelector(`#card${id}`);
    let Quantity = currentClickCard.querySelector(".product_qyt").innerText;
    let price = currentClickCard.querySelector(".product_price").innerText;

    price = price.replace("₹","");

    // Maintaining the Cart Values

    let existingproduct = arrLocalStorageProduct.find((currentproduct)=>currentproduct.id == id);
    if(existingproduct && Quantity > 1){
        Quantity = Number(existingproduct.Quantity) + Number(Quantity);
        price = Number(price * Quantity);

    // If User Add Already Added Item and want to add more quantity

    let updatedCart = { id , Quantity , price};
    updatedCart = arrLocalStorageProduct.map((currentClickCard)=>{
        return currentClickCard.id == id ? updatedCart : currentClickCard;
    });

    localStorage.setItem("cartProductLS",JSON.stringify(updatedCart))
}

    if(existingproduct){
        return false;
    }

    price = Number(price * Quantity);
    Quantity = Number(Quantity);

    arrLocalStorageProduct.push({id,Quantity,price});     // push the data id,qty,price into local storage
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct))

    //Update cart Button Value
    updateCartValue(arrLocalStorageProduct);
};

