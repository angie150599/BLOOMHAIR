# 🌸 BloomHair - Sitio Web en HTML Puro

## ✅ Archivos Incluidos

```
/app/html-version/
├── index.html      # Estructura completa del sitio
├── styles.css      # Todos los estilos CSS
├── script.js       # Funcionalidad JavaScript
├── data.js         # Datos (productos, colores, transformaciones)
└── README.md       # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente en el Navegador

1. Abre el archivo `index.html` en tu navegador
2. ¡Listo! El sitio funciona completamente

### Opción 2: Subir a un Hosting

Puedes subir estos archivos a **cualquier hosting**:

- **GitHub Pages** (gratis)
- **Netlify** (gratis)
- **Vercel** (gratis)
- **000webhost** (gratis)
- Tu servidor compartido
- Cualquier hosting HTML

### Opción 3: Servidor Local Simple

Si tienes Python instalado:

```bash
cd /app/html-version
python -m http.server 8000
```

Luego abre: `http://localhost:8000`

## ✨ Características Implementadas

### ✅ Navbar
- Transparente sobre el hero
- Cambia a blanco al hacer scroll
- Menú hamburguesa para móvil
- Dropdown de colecciones
- Carrito de compras funcional

### ✅ Hero Section
- Video de fondo (tu video de pelo rubio)
- Texto con gradiente dorado
- 2 botones CTA
- Scroll indicator animado
- Responsive completo

### ✅ Secciones
- **Colores**: 16 muestras de colores con nombres
- **Tipos de Extensiones**: 8 categorías
- **Sobre Nosotros**: Con imagen y features
- **Profesional**: 4 cards con tus imágenes
- **Productos**: 6 productos con precios
- **Herramientas**: 8 herramientas de instalación
- **Galería**: 6 fotos de transformaciones
- **Transformaciones**: 5 antes/después
- **Newsletter**: Formulario funcional
- **Footer**: Completo con contacto

### ✅ Funcionalidad JavaScript
- Navbar scroll effect
- Video lazy loading
- Menú móvil
- Smooth scrolling
- Newsletter con notificaciones
- Añadir al carrito
- Animaciones scroll
- Dropdown menús

### ✅ Responsive Design
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Personalización

### Cambiar Colores

Edita en `styles.css`:

```css
/* Color principal dorado */
#C9A882  →  TU_COLOR

/* Color hover */
#B89968  →  TU_COLOR_HOVER
```

### Cambiar Logo

Edita en `index.html` línea ~46:

```html
<h1>BLOOM<span class="logo-accent">HAIR</span></h1>
```

### Cambiar Video

Edita en `index.html` línea ~136:

```html
<source src="TU_VIDEO.mp4" type="video/mp4">
```

### Agregar Productos

Edita en `data.js`:

```javascript
const products = [
  { 
    id: 7, 
    name: 'Nuevo Producto', 
    price: 299.00, 
    image: 'URL_IMAGEN',
    category: 'categoria'
  }
];
```

### Agregar Transformaciones

Edita en `data.js`:

```javascript
const transformations = [
  {
    id: 6,
    before: 'URL_ANTES',
    after: 'URL_DESPUES',
    artist: '@usuario',
    description: 'Descripción'
  }
];
```

## 📱 Compatibilidad

✅ Chrome / Edge (últimas versiones)
✅ Firefox (últimas versiones)
✅ Safari (últimas versiones)
✅ Opera (últimas versiones)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 No Requiere

❌ Node.js
❌ npm / yarn
❌ React
❌ Webpack
❌ Build process
❌ Dependencias

## 📦 Ventajas del HTML Puro

1. **Simplicidad**: Solo abres el archivo y funciona
2. **Velocidad**: Carga instantánea, sin frameworks pesados
3. **Hosting**: Funciona en cualquier servidor
4. **Mantenimiento**: Fácil de editar y actualizar
5. **Portabilidad**: Copia la carpeta y listo
6. **SEO**: HTML puro es excelente para SEO

## 🎯 Próximos Pasos

### Para agregar funcionalidad backend:

1. **Formulario de Contacto**: Usa Formspree o EmailJS
2. **Base de Datos**: Conecta con Firebase o Supabase
3. **E-commerce**: Integra Stripe o PayPal
4. **CMS**: Usa Netlify CMS para gestión de contenido

### Servicios Recomendados (Gratis):

- **Hosting**: Netlify, Vercel, GitHub Pages
- **Formularios**: Formspree, EmailJS
- **Analytics**: Google Analytics, Plausible
- **Comentarios**: Disqus

## 🌐 Subir a GitHub Pages (Gratis)

1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages
4. Selecciona la rama main
5. ¡Listo! Tu sitio estará en `tuusuario.github.io/repo`

## 📞 Soporte

Si necesitas ayuda:
- Revisa los comentarios en el código
- Todos los archivos están bien documentados
- Cada sección tiene su propio ID para fácil navegación

## ✨ Créditos

**Sitio creado para**: BloomHair
**Inspirado en**: KoviHair.com
**Tecnologías**: HTML5, CSS3, JavaScript ES6
**Video**: Tu contenido original de pelo rubio
**Imágenes**: Tus 10 fotos de transformaciones

---

## 🎉 ¡Tu sitio está listo!

Simplemente abre `index.html` y disfruta de tu sitio profesional de extensiones de cabello.

**Página funcional al 100% sin necesidad de servidor o configuración adicional.**
