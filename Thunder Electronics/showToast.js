const showToast = (operation , id )=>{
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation == "add"){
        toast.textContent = `Product With ID ${id} Has Beed Added`;
    }
    else{
        toast.textContent = `Product With ID ${id} Has Beed Deleted`;
    }

    document.body.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },2000);
}