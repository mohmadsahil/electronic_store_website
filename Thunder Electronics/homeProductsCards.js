const products_card_container = document.querySelector("#products_card_container");
const products_card_template = document.querySelector("#products_card_template");

export const showProductsContainer = (products)=>{
    if(!products){
        return false
    }

    products.forEach((curProd) => {
        const {category,description,id,image,name,price,stock,actualprice } = curProd;
        const productTemplateClone = document.importNode(products_card_template.content,true); // all the Div of Template Has Been assign that templateClone Variable
        
        productTemplateClone.querySelector(".product_name").textContent = name;
        productTemplateClone.querySelector(".product_description").textContent = description;
        productTemplateClone.querySelector(".product_price").textContent = `₹${price}`;
        productTemplateClone.querySelector(".product_actual_price").textContent = `₹${actualprice}`;
        productTemplateClone.querySelector(".total_available_stock").textContent = stock;
        productTemplateClone.querySelector(".card_category").textContent = category;
        productTemplateClone.querySelector(".product_image").src = image;

        products_card_container.append(productTemplateClone);
    });
};