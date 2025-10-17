// 🛠️ Herramienta para Agente IA: Carga el listado de productos desde un archivo JSON local.
const API_BASE_URL = '/data/precios.json';

/**
 * Carga el listado de productos desde el archivo JSON local.
 * @returns {Promise<Array<Object>>} Lista de objetos Producto.
 */
export async function fetchProducts() {
    try {
        const response = await fetch(API_BASE_URL); 
        
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo de datos: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Datos locales cargados:", data);
        return data;

    } catch (error) {
        console.error("Fallo al cargar los datos locales:", error);
        return [];
    }
}