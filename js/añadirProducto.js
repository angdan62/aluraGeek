import { conexionAPI } from "./conexionAPI.js";
import {validarPrecio} from "./validarCamposForm.js";


const form_product = document.querySelector("[data-form-product]");
const clearButton = document.getElementById("form__product_controls-clear");

const nameInput = document.querySelector("[data-form-name]");
const priceInput = document.querySelector("[data-form-price]");
const imagenInput = document.querySelector("[data-form-img]");

async function addProductCard(evento){
    evento.preventDefault();

    const name = nameInput.value;
    const price = validarPrecio(priceInput.value);
    const imagen = imagenInput.value;

    try{
        await conexionAPI.addProduct(name, price, imagen);
        window.alert("Se ha envíado con éxito el producto");
        evento.preventDefault();
    }catch(e){
        window.alert(e);
    }
}

clearButton.addEventListener("click", () => {
    nameInput.value = priceInput.value = imagenInput.value = null;
});

form_product.addEventListener("submit", evento => addProductCard(evento));
