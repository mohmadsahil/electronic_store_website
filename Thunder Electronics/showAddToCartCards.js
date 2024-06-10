import products  from "./Api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeCartItem } from "./removeCartItem";
import { updateCartProductTotal } from "./updateCartProductTotal";


let cartProducts = getCartProductFromLS();

let filterproducts = products.filter((currentproduct)=>{
    return cartProducts.some((currentElement)=> // some() is a itirative method that will return all the element after comparison but with map and filter we can't get the data with comparison
           currentElement.id == currentproduct.id)
})

const cartElement = document.querySelector("#productCartContainer");
const addToCartTemplate = document.querySelector("#add_to_cart_template");

const showCartProduct = ()=>{
        filterproducts.forEach((currentproduct)=>{
        const {category,id,image,name,price,stock } = currentproduct;
        let addCartTemplateClone = document.importNode(addToCartTemplate.content,true);

        const LSActualData = fetchQuantityFromCartLS(id, price)

        addCartTemplateClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        addCartTemplateClone.querySelector(".addToCardCategory").textContent = category;
        addCartTemplateClone.querySelector(".addToCardProductName").textContent = name;
        addCartTemplateClone.querySelector(".product_qyt").textContent = LSActualData.Quantity;
        addCartTemplateClone.querySelector(".addToCardProductPrice").textContent = `₹${LSActualData.price}`;
        addCartTemplateClone.querySelector(".addToCartimg").src = image;

        addCartTemplateClone.querySelector(".qyt_element").addEventListener("click",(event)=>{      // Managing the Card Quantity
            incrementDecrement(event,id,stock,price);
    });
        

        addCartTemplateClone.querySelector(".addToCartRemove").addEventListener("click",() => removeCartItem(id))

        cartElement.append(addCartTemplateClone);
    })
}

showCartProduct();  //Showing the Cart Products

updateCartProductTotal(); //calculate the total price of cart items


