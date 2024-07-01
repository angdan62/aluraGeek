

export function validarPrecio(productoPrecio) {
    // Expresión regular para validar la entrada
    const regex = /^\d{1,5}(\.\d{1,2})?$/;

    // Si la entrada coincide con la expresión regular
    if (regex.test(productoPrecio)) {
        // Si el texto tiene solo los dígitos sin parte decimal, añadir ".00"
        if (!productoPrecio.includes('.')) {
            productoPrecio += ".00";
        }
        // Si el texto tiene parte decimal pero falta un dígito, añadir "0"
        else if (productoPrecio.split('.')[1].length === 1) {
            productoPrecio += "0";
        }
        return productoPrecio;
    } else {
        // Verifica si la entrada cumple con las reglas básicas
        const basicRegex = /^\d{1,5}(\.\d+)?$/;
        if (basicRegex.test(productoPrecio)) {
            // Si la parte decimal tiene más de 2 dígitos, tomar solo los primeros 2
            if (productoPrecio.includes('.')) {
                const [integerPart, decimalPart] = productoPrecio.split('.');
                const formattedDecimalPart = decimalPart.substring(0, 2);
                productoPrecio = `${integerPart}.${formattedDecimalPart}`;
                // Si la nueva entrada no tiene parte decimal, añadir ".00"
                if (!productoPrecio.includes('.')) {
                    productoPrecio += ".00";
                }
                // Si la nueva parte decimal tiene solo un dígito, añadir "0"
                else if (productoPrecio.split('.')[1].length === 1) {
                    productoPrecio += "0";
                }
            } else {
                // Si solo tiene la parte entera, añadir ".00"
                productoPrecio += ".00";
            }
            return productoPrecio;
        } else {
            throw new Error("El texto no cumple con el formato requerido.");
        }
    }
}