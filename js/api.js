// Variable que simula la URL de tu API externa.
// Un Agente IA puede cambiar esto por la URL real de un servicio Serverless (Supabase, Firebase, etc.)
const API_BASE_URL = 'https://api.tudominio.com/v1/productos-reparacion';

/**
 * 🛠️ Herramienta para Agente IA: Carga el listado de productos desde la API.
 * @returns {Promise<Array<Object>>} Lista de objetos Producto.
 */
export async function fetchProducts() {
    try {
        // En un entorno real, la base de datos se conecta aquí.
        const response = await fetch(API_BASE_URL); 
        
        if (!response.ok) {
            throw new Error(`Error en la API: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Datos de la API cargados:", data);
        return data;

    } catch (error) {
        // Devuelve datos estáticos de respaldo si la API falla o no existe (Para test de GH Pages)
        console.error("Fallo al conectar con la API, usando datos de MOCK:", error);
        return mockProductData;
    }
}

// ⚠️ MOCK DE DATOS (Backup/Simulación para entorno estático de GitHub Pages)
const mockProductData = [
  {
    "id": 10,
    "tipo_servicio": "Reparación Módulo",
    "marca": "Apple",
    "modelo": "iPhone 13 Pro",
    "componente": "Módulo OLED",
    "precio_usd": 320.00,
    "disponible": true
  },
  {
    "id": 20,
    "tipo_servicio": "Reemplazo Batería",
    "marca": "Samsung",
    "modelo": "Note 20 Ultra",
    "componente": "Batería",
    "precio_usd": 75.00,
    "disponible": true
  },
  {
    "id": 30,
    "tipo_servicio": "Reparación Pin",
    "marca": "Motorola",
    "modelo": "Moto G9",
    "componente": "Pin de Carga",
    "precio_usd": 40.00,
    "disponible": false
  }
];
