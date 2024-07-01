
const urlAPI = "http://localhost:3001/productos";

async function showProducts(){
    const response = await fetch(urlAPI);
    const productos = response.json();

    return productos;
}

async function addProduct(name, price, image){

    const response = await fetch(urlAPI, {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            name:name,
            price:price,
            imagen:image
        })
    });

    const producto = response.json();

    if(!response.ok){
        throw new Error ("¡UPS! Ha ocurrido un error al capturar el producto.");
    }

    return producto;
}

async function deleteProduct(productId){
    const response = await fetch(`${urlAPI}/${productId}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("¡UPS! Ha ocurrido un error al eliminar el producto.");
    }
}



export const conexionAPI ={
    showProducts, addProduct, deleteProduct
}