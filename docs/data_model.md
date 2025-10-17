# MODELO DE DATOS: Producto de Reparación

## Propósito
Este esquema define la estructura de los datos de inventario y precios de los servicios de reparación de dispositivos móviles. Es la estructura esperada de la respuesta JSON de la API.

## Estructura de la Tabla / Objeto Principal: `productos`

| Campo (Key) | Tipo de Dato (JSON) | Descripción Detallada | Requerido | Restricciones / Notas |
| :--- | :--- | :--- | :--- | :--- |
| `id` | INTEGER | Identificador único primario del producto/servicio. | Sí | Debe ser único. |
| `tipo_servicio` | STRING | Clasificación general del trabajo. | Sí | "Reparación Módulo", "Reemplazo Batería", "Diagnóstico". |
| `marca` | STRING | Marca del dispositivo móvil (ej. Apple, Samsung). | Sí | Usar nombres estandarizados (ej. "Apple" en lugar de "Manzana"). |
| `modelo` | STRING | Modelo específico del dispositivo (ej. iPhone 15, Galaxy S23). | Sí | Permite identificar la pieza exacta. |
| `componente` | STRING | Pieza específica afectada/reemplazada. | Sí | "Módulo OLED", "Pin de Carga", "Batería". |
| `precio_usd` | DECIMAL | Precio final del servicio en Dólares Americanos. | Sí | Formato de dos decimales. |
| `disponible` | BOOLEAN | Estado de stock del componente para la reparación. | Sí | `true` si hay stock, `false` si está agotado. |

## EJEMPLO DE RESPUESTA DE LA API (Formato JSON)

Un agente de IA puede usar este ejemplo para simular la conexión y el procesamiento de datos.

```json
[
  {
    "id": 101,
    "tipo_servicio": "Reparación Módulo",
    "marca": "Apple",
    "modelo": "iPhone 14 Pro Max",
    "componente": "Módulo OLED Original",
    "precio_usd": 450.00,
    "disponible": true
  },
  {
    "id": 205,
    "tipo_servicio": "Reparación Pin",
    "marca": "Samsung",
    "modelo": "Galaxy A52",
    "componente": "Pin de Carga USB-C",
    "precio_usd": 45.50,
    "disponible": true
  },
  {
    "id": 310,
    "tipo_servicio": "Reemplazo Batería",
    "marca": "Xiaomi",
    "modelo": "Mi 11",
    "componente": "Batería de Alta Capacidad",
    "precio_usd": 60.00,
    "disponible": false
  }
]
