# MODELO DE DATOS: Producto de Reparación

Este es el esquema JSON (respuesta esperada de la API) para cada producto/servicio.

| Campo (Key) | Tipo | Descripción | Ejemplo |
| :--- | :--- | :--- | :--- |
| `id` | INTEGER | Identificador único del producto. | 45 |
| `tipo_servicio` | STRING | Naturaleza del trabajo (Reparación Módulo, Batería, etc.). | "Reemplazo Batería" |
| `marca` | STRING | Marca del dispositivo (ej. Apple, Samsung). | "Xiaomi" |
| `modelo` | STRING | Modelo específico del dispositivo. | "Redmi Note 10" |
| `componente` | STRING | Componente específico reparado (ej. Pin de carga, Módulo). | "Pin de Carga" |
| `precio_usd` | DECIMAL | Precio final del servicio en USD. | 45.00 |
| `disponible` | BOOLEAN | Estado de stock del componente. | true |

## EJEMPLO DE RESPUESTA DE LA API

```json
[
  {
    "id": 1,
    "tipo_servicio": "Reparación Módulo",
    "marca": "Samsung",
    "modelo": "Galaxy S21",
    "componente": "Módulo AMOLED",
    "precio_usd": 250.00,
    "disponible": true
  },
  {
    "id": 2,
    "tipo_servicio": "Reemplazo Batería",
    "marca": "Apple",
    "modelo": "iPhone 11",
    "componente": "Batería",
    "precio_usd": 65.00,
    "disponible": true
  }
]
