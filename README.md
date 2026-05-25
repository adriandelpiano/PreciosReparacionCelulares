# Catálogo de Precios y Reparación de Celulares

📱 Una página web moderna para gestionar y visualizar servicios de reparación de dispositivos móviles y sus precios.

## 🌐 Ver en vivo

**GitHub Pages:** [https://adriandelpiano.github.io/PreciosReparacionCelulares/](https://adriandelpiano.github.io/PreciosReparacionCelulares/)

## ✨ Características

- ✅ **Catálogo interactivo** de servicios de reparación
- ✅ **Panel de administración** para añadir, editar y eliminar servicios
- ✅ **Almacenamiento local** con localStorage (los datos persisten en el navegador)
- ✅ **Interfaz responsiva** que se adapta a cualquier dispositivo
- ✅ **Búsqueda y filtrado** de servicios
- ✅ **Visualización de precios** en USD

## 🛠️ Tecnologías utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Almacenamiento:** localStorage del navegador
- **Alojamiento:** GitHub Pages
- **Monitoreo:** Sentry (para errores)

## 📂 Estructura del proyecto

```
PreciosReparacionCelulares/
├── index.html           # Página principal
├── css/
│   └── style.css        # Estilos de la aplicación
├── js/
│   ├── api.js           # Funciones de API y carga de datos
│   └── main.js          # Lógica principal de la aplicación
├── data/
│   └── precios.json     # Base de datos de productos
├── README.md            # Este archivo
└── .nojekyll            # Archivo para GitHub Pages
```

## 📋 Modelo de datos

Cada producto sigue este esquema JSON:

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| `id` | INTEGER | Identificador único | 1 |
| `tipo_servicio` | STRING | Tipo de servicio | "Reparación Módulo" |
| `marca` | STRING | Marca del dispositivo | "Samsung" |
| `modelo` | STRING | Modelo del dispositivo | "Galaxy S21" |
| `componente` | STRING | Componente reparado | "Módulo AMOLED" |
| `precio_usd` | DECIMAL | Precio en USD | 250.00 |
| `disponible` | BOOLEAN | Disponibilidad en stock | true |

### Ejemplo de datos

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
  }
]
```

## 🚀 Cómo usar

### En local

1. Clona el repositorio:
```bash
git clone https://github.com/adriandelpiano/PreciosReparacionCelulares.git
cd PreciosReparacionCelulares
```

2. Abre `index.html` en tu navegador o usa un servidor local:
```bash
python -m http.server 8000
# o si tienes npm instalado
npx http-server
```

3. Accede a `http://localhost:8000`

### Usar GitHub Pages

El sitio ya está configurado para GitHub Pages. Solo visita:
👉 **https://adriandelpiano.github.io/PreciosReparacionCelulares/**

## 💾 Gestión de datos

- **Carga inicial:** Los datos se cargan desde `data/precios.json`
- **Almacenamiento:** Los cambios se guardan en `localStorage` del navegador
- **Persistencia:** Los datos se mantienen entre sesiones del navegador

### Operaciones disponibles

- ➕ **Añadir**: Rellena el formulario de administración y haz clic en "Guardar"
- ✏️ **Editar**: Haz clic en "Editar" en una tarjeta y modifica los datos
- ❌ **Eliminar**: Haz clic en "Eliminar" para borrar un servicio
- 📊 **Ver datos**: Expande la sección "Ver Datos Guardados" para ver el JSON almacenado

## 🎨 Personalización

### Cambiar datos
Edita el archivo `data/precios.json` con tus servicios:

```json
{
  "id": 1,
  "tipo_servicio": "Tu servicio",
  "marca": "Tu marca",
  "modelo": "Tu modelo",
  "componente": "Tu componente",
  "precio_usd": 100.00,
  "disponible": true
}
```

### Cambiar estilos
Modifica `css/style.css` para personalizar los colores y diseño

## 🔧 Configuración de GitHub Pages

GitHub Pages ya está habilitado en este repositorio. Para verificar o cambiar la configuración:

1. Ve a `Settings` > `Pages`
2. En "Source" selecciona `Deploy from a branch`
3. En "Branch" selecciona `main` y `/root`
4. Guarda los cambios

## 📞 Contato

Si tienes preguntas o sugerencias, abre un **Issue** en el repositorio.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Última actualización:** 2025-05-25  
**Versión:** 1.0.0
