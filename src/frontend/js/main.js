
import { fetchProducts } from './api.js';

const adminForm = document.getElementById('admin-form');
const productIdInput = document.getElementById('product-id');
const marcaInput = document.getElementById('marca');
const modeloInput = document.getElementById('modelo');
const tipoServicioInput = document.getElementById('tipo_servicio');
const componenteInput = document.getElementById('componente');
const precioUsdInput = document.getElementById('precio_usd');
const disponibleInput = document.getElementById('disponible');
const cancelEditButton = document.getElementById('cancel-edit');
const productListElement = document.getElementById('product-list');
const storedDataElement = document.getElementById('stored-data');

let products = [];

// Cargar productos iniciales
async function loadProducts() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    } else {
        products = await fetchProducts();
        saveProducts();
    }
    renderProducts();
    renderStoredData();
}

// Guardar productos en localStorage
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
    renderStoredData();
}

// Renderizar datos en el area de texto
function renderStoredData() {
    storedDataElement.textContent = JSON.stringify(products, null, 2);
}

// Renderizar productos
function renderProducts() {
    productListElement.innerHTML = ''; 

    if (products.length === 0) {
        productListElement.innerHTML = '<p>No se encontraron productos de reparación.</p>';
        return;
    }

    products.forEach(product => {
        const cardHTML = createProductCard(product);
        productListElement.innerHTML += cardHTML;
    });
}

// Crear tarjeta de producto
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
            <div class="admin-buttons">
                <button class="edit-btn" data-id="${product.id}">Editar</button>
                <button class="delete-btn" data-id="${product.id}">Eliminar</button>
            </div>
        </div>
    `;
}

// Limpiar el formulario
function clearForm() {
    productIdInput.value = '';
    adminForm.reset();
}

// Rellenar el formulario para editar
function populateForm(product) {
    productIdInput.value = product.id;
    marcaInput.value = product.marca;
    modeloInput.value = product.modelo;
    tipoServicioInput.value = product.tipo_servicio;
    componenteInput.value = product.componente;
    precioUsdInput.value = product.precio_usd;
    disponibleInput.checked = product.disponible;
}

// Event listener para el formulario
adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = productIdInput.value;
    const newProduct = {
        id: id ? parseInt(id) : Date.now(),
        marca: marcaInput.value,
        modelo: modeloInput.value,
        tipo_servicio: tipoServicioInput.value,
        componente: componenteInput.value,
        precio_usd: parseFloat(precioUsdInput.value),
        disponible: disponibleInput.checked
    };

    if (id) {
        // Actualizar producto existente
        const index = products.findIndex(p => p.id === parseInt(id));
        products[index] = newProduct;
    } else {
        // Añadir nuevo producto
        products.push(newProduct);
    }

    saveProducts();
    renderProducts();
    clearForm();
});

// Event listener para cancelar edición
cancelEditButton.addEventListener('click', clearForm);

// Event listeners para editar y borrar (delegados desde la lista)
productListElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const id = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === id);
        populateForm(product);
    }

    if (e.target.classList.contains('delete-btn')) {
        const id = parseInt(e.target.dataset.id);
        products = products.filter(p => p.id !== id);
        saveProducts();
        renderProducts();
    }
});

// Inicializar
loadProducts();
