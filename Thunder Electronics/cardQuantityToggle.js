export const cardQuantityToggle = (event, id, stock)=>{
    
    const currentCardElement = document.querySelector(`#card${id}`);

    const productQuantity = currentCardElement.querySelector(".product_qyt");

    let Quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if(event.target.className == "cart_increment"){
        if(Quantity < stock){
            Quantity += 1;
        }
        else if(Quantity == stock){
            Quantity=stock;
        }
    }

    if(event.target.className == "cart_decrement"){
        if(Quantity>1){
            Quantity -= 1;
        }
    }

    productQuantity.innerText = Quantity;
    productQuantity.setAttribute("data-quantity",Quantity);
}

