import { conexionAPI } from "./conexionAPI.js";
import { deleteProduct } from "./eliminarProducto.js";

const containerProduct = document.querySelector("[data-card-container]");

export default function chargeProduct(productId, name, price, image) {
    const product = document.createElement("div");
    product.className = "card";
    product.innerHTML = `
    <div class="card_img">
        <img class="card__img-img" src="${image}"></img>
    </div>
    <div class="card-title">
        <p class="card__title-name">${name}</p>
        <div class="card-info-subtitle">
            <p class="card__subtitle-price">$ ${price}</p>
            <button class="card__delete-btn" id="card__delete-btn" data-card-delete-btn></button>
        </div>
    </div>
    `;

    // Añadir el evento click al botón de eliminación
    const deleteBtn = product.querySelector("[data-card-delete-btn]");
    
    deleteBtn.addEventListener("click", () => {
        deleteProduct(productId, product);
    });

    return product;
}

async function showProducts() {
    try {

        const listProducts = await conexionAPI.showProducts();
        console.log(listProducts);
        if(listProducts.length != 0){
            listProducts.forEach(product =>
                containerProduct.appendChild(chargeProduct(
                    product.id, product.name, product.price, product.imagen
                ))
            );
        }
        else{
            containerProduct.innerHTML = `<h1>No hay productos agregados actualmente.</h1>`;
        }

    } catch {
        containerProduct.innerHTML = `<h1>¡UPS! Ha ocurrido un problema con la conexión.</h1>`;
    }
}

showProducts();
