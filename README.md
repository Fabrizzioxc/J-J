# J&J Servicios Generales 🛠️

<p align="center">
  <img src="../jyj/src/assets/254shots_so.png" alt="Vista previa del sitio de J&J Servicios Generales" width="100%" />
</p>

## Descripción del Proyecto

Este es el sitio web oficial de **J&J Servicios Generales**, diseñado para presentar nuestros servicios de **Drywall 🧱, Pintura 🎨 y Electricidad 💡**, así como para informar a nuestros clientes sobre quiénes somos y cómo contactarnos.  
El proyecto está construido con **Astro** para un rendimiento web de vanguardia y **Tailwind CSS** para un desarrollo de estilos ágil y altamente personalizable.

---

## 🧰 Tecnologías Utilizadas

- **Astro**: Un moderno framework de construcción de sitios web que ofrece rendimiento, flexibilidad y una gran experiencia de desarrollo.
- **Tailwind CSS**: Un framework CSS "utility-first" que permite construir diseños personalizados rápidamente, sin escribir CSS tradicional.
- **TypeScript**: Utilizado en componentes y scripts para una mejor robustez y mantenibilidad del código.

---

## ✨ Características Principales

- ⚡ **Rendimiento Optimizado**: Gracias a la arquitectura de _Island Architecture_ de Astro, el sitio es increíblemente rápido y ligero.
- 📱 **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla (escritorio, tablet, móvil) gracias a Tailwind CSS.
- 🧩 **Componentización Modular**: Estructura de componentes reutilizables (`Header`, `Footer`, `PageHero`, `ServiceCard`, `SectionTitle`, etc.) que facilita el mantenimiento y la escalabilidad.
- 📄 **Páginas de Servicio Dedicadas**: Cada servicio (Drywall, Pintura, Electricidad) tiene su propia página detallada.
- 🧭 **Navegación Activa Inteligente**: El menú de navegación resalta el enlace "Servicios" al estar en cualquiera de sus páginas.
- 🔍 **SEO Amigable**: Títulos y descripciones `<meta name="description">` dinámicos para una mejor indexación.
- 🧵 **Breadcrumbs Simplificados**: Integrados en `PageHero`, muestran la ruta actual como texto plano.

---

## 🗂️ Estructura del Proyecto

├── public/ # Archivos estáticos (imágenes, favicons, etc.)
│ └── images/ # Imágenes del sitio
├── assets/ # Otros assets como la preview
│ └── 254shots_so.png
├── src/ # Código fuente de Astro
│ ├── components/ # Componentes reutilizables de UI
│ │ ├── Header.astro
│ │ ├── Footer.astro
│ │ ├── PageHero.astro
│ │ ├── ServiceCard.astro
│ │ └── SectionTitle.astro
│ ├── layouts/ # Layouts principales para las páginas
│ │ └── layout.astro
│ ├── pages/ # Archivos de páginas (rutas)
│ │ ├── index.astro # Página de inicio
│ │ ├── nosotros.astro # Página "Sobre Nosotros"
│ │ ├── contacto.astro # Página de Contacto
│ │ ├── proyectos.astro # Página de Proyectos (aún por desarrollar contenido)
│ │ └── servicios/
│ │ ├── index.astro # Página principal de Servicios
│ │ ├── drywall.astro # Detalle del servicio de Drywall
│ │ ├── electricidad.astro# Detalle del servicio de Electricidad
│ │ └── pintura.astro # Detalle del servicio de Pintura
│ └── styles/ # Estilos globales y de Tailwind
│ └── global.css
├── astro.config.mjs # Configuración de Astro
├── tailwind.config.mjs # Configuración de Tailwind CSS
├── package.json # Dependencias y scripts del proyecto
└── README.md # Este archivo


---

## 🚀 Configuración y Ejecución Local

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd jj-servicios-generales

2. Instalar Dependencias
Asegúrate de tener Node.js y npm, yarn o pnpm instalados.

npm install
# o
yarn install
# o
pnpm install

3. Ejecutar en Modo Desarrollo
Esto iniciará un servidor de desarrollo local con recarga en vivo.

npm run dev

El sitio estará disponible en:
http://localhost:4321 (o el puerto que Astro asigne).

4. Construir para Producción
Para generar una versión optimizada y lista para desplegar:

bash
Copiar
Editar
npm run build
Los archivos estáticos se generarán en la carpeta dist/.

5. Previsualizar la Versión de Producción
Para probar la versión construida antes de desplegar:

bash
Copiar
Editar
npm run preview