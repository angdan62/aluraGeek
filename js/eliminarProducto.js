import { conexionAPI } from "./conexionAPI.js";

export async function deleteProduct(productId, productElement) {
    try {
        await conexionAPI.deleteProduct(productId);
        productElement.remove();
    } catch (error) {
        alert("ERROR AL ELIMINAR EL PRODUCTO, INTENTELO NUEVAMENTE MAS TARDE");
    }
}
