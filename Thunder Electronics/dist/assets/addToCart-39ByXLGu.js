import{g as l,u as S,p as P}from"./getCartProducts-DBS9fj6Z.js";/* empty css                   */const C=(o,e)=>{let c=l().find(n=>n.id==o),a=1;return c&&(a=c.Quantity,e=c.price),{Quantity:a,price:e}},s=()=>{let o=document.querySelector(".productOrderSubTotalPrice"),e=document.querySelector(".productOrderFinalTotalPrice"),a=l().reduce((n,u)=>{let t=parseInt(u.price)||0;return n+t},0);o.textContent=`₹${a}`,e.textContent=`₹${a+50}`};S(s);const g=(o,e,r,c)=>{const a=document.querySelector(`#card${e}`),n=a.querySelector(".product_qyt"),u=a.querySelector(".addToCardProductPrice");let t=1,d=0,i=l(),p=i.find(m=>m.id==e);p?(t=p.Quantity,d=p.price):d=c,o.target.className=="cart_increment"&&(t<r?t+=1:t==r&&(t=r,d=c*r)),o.target.className=="cart_decrement"&&t>1&&(t-=1),d=c*t;let y={id:e,Quantity:t,price:d};y=i.map(m=>m.id==e?y:m),localStorage.setItem("cartProductLS",JSON.stringify(y)),n.innerText=t,u.innerText=`₹${d}`,s()},f=o=>{let e=l();e=e.filter(c=>c.id!=o),localStorage.setItem("cartProductLS",JSON.stringify(e));let r=document.getElementById(`card${o}`);r&&r.remove(),console.log(r),s()};let q=l(),T=P.filter(o=>q.some(e=>e.id==o.id));const x=document.querySelector("#productCartContainer"),L=document.querySelector("#add_to_cart_template"),_=()=>{T.forEach(o=>{const{category:e,id:r,image:c,name:a,price:n,stock:u}=o;let t=document.importNode(L.content,!0);const d=C(r,n);t.querySelector("#cardValue").setAttribute("id",`card${r}`),t.querySelector(".addToCardCategory").textContent=e,t.querySelector(".addToCardProductName").textContent=a,t.querySelector(".product_qyt").textContent=d.Quantity,t.querySelector(".addToCardProductPrice").textContent=`₹${d.price}`,t.querySelector(".addToCartimg").src=c,t.querySelector(".qyt_element").addEventListener("click",i=>{g(i,r,u,n)}),t.querySelector(".addToCartRemove").addEventListener("click",()=>f(r)),x.append(t)})};_();s();
