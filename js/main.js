import { fetchProducts } from './api.js';

// Función que toma un objeto producto y crea el HTML para mostrarlo.
function createProductCard(product) {
    const isAvailable = product.disponible ? 'Disponible' : 'AGOTADO';
    const availabilityClass = product.disponible ? 'available' : 'unavailable';

    return `
        <div class="product-card">
            <h3>${product.marca} ${product.modelo}</h3>
            <p><strong>Servicio:</strong> ${product.tipo_servicio}</p>
            <p><strong>Componente:</strong> ${product.componente}</p>
            <p class="price">Precio: $${product.precio_usd.toFixed(2)} USD</p>
            <p class="${availabilityClass}">Estado: ${isAvailable}</p>
        </div>
    `;
}

// Función principal para cargar y renderizar los productos.
async function init() {
    const productListElement = document.getElementById('product-list');
    
    // 1. Obtener los productos (usa el MOCK si la API real no está lista)
    const products = await fetchProducts();

    // 2. Limpiar el estado de carga
    productListElement.innerHTML = ''; 

    if (products.length === 0) {
        productListElement.innerHTML = '<p>No se encontraron productos de reparación.</p>';
        return;
    }

    // 3. Renderizar cada producto
    products.forEach(product => {
        const cardHTML = createProductCard(product);
        productListElement.innerHTML += cardHTML;
    });
}

init(); 
