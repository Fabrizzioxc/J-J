# J&J Servicios Generales 🛠️

![Vista previa del sitio de J&J Servicios Generales](./src/assets/254shots_so.png)

## 📌 Descripción del Proyecto

Este es el sitio web oficial de **J&J Servicios Generales**, diseñado para presentar nuestros servicios de **Drywall 🧱, Pintura 🎨 y Electricidad 💡**, así como para informar a nuestros clientes sobre quiénes somos y cómo contactarnos.

El proyecto está construido con **Astro** para un rendimiento web de vanguardia y **Tailwind CSS** para un desarrollo de estilos ágil y altamente personalizable.

---

## ⚙️ Tecnologías Utilizadas

- **Astro**: Un moderno framework de construcción de sitios web que ofrece rendimiento, flexibilidad y una gran experiencia de desarrollo.
- **Tailwind CSS**: Un framework CSS "utility-first" que permite construir diseños personalizados rápidamente, sin escribir CSS tradicional.
- **TypeScript**: Utilizado en componentes y scripts para una mejor robustez y mantenibilidad del código.

---

## ✨ Características Principales

- 🚀 **Rendimiento Optimizado**: Gracias a la arquitectura de _Island Architecture_ de Astro, el sitio es increíblemente rápido y ligero.
- 📱 **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla (escritorio, tablet, móvil) gracias a Tailwind CSS.
- 🧩 **Componentización Modular**: Estructura de componentes reutilizables como `Header`, `Footer`, `PageHero`, `ServiceCard`, `SectionTitle`, etc.
- 📄 **Páginas de Servicio Dedicadas**: Cada servicio (Drywall, Pintura, Electricidad) tiene su propia página detallada.

- 🔍 **SEO Amigable**: Implementación de títulos y descripciones dinámicos con etiquetas `<meta name="description">`.
- 🧵 **Breadcrumbs Simplificados**: Mostrados en el componente `PageHero` como texto plano para mejor guía visual.

---

## 📁 Estructura del Proyecto

```bash
├── public/                 # Archivos estáticos (imágenes, favicons, etc.)
│   └── images/             # Imágenes del sitio
├── assets/                 # Otros assets como la preview
│   └── 254shots_so.png
├── src/                    # Código fuente de Astro
│   ├── components/         # Componentes reutilizables de UI
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PageHero.astro
│   │   ├── ServiceCard.astro
│   │   └── SectionTitle.astro
│   ├── layouts/            # Layouts principales
│   │   └── layout.astro
│   ├── pages/              # Páginas (rutas)
│   │   ├── index.astro         # Página de inicio
│   │   ├── nosotros.astro      # Página "Sobre Nosotros"
│   │   ├── contacto.astro      # Página de Contacto
│   │   ├── proyectos.astro     # Página de Proyectos
│   │   └── servicios/
│   │       ├── index.astro         # Página principal de Servicios
│   │       ├── drywall.astro       # Detalle del servicio de Drywall
│   │       ├── electricidad.astro  # Detalle del servicio de Electricidad
│   │       └── pintura.astro       # Detalle del servicio de Pintura
│   └── styles/             # Estilos globales
│       └── global.css
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind CSS
├── package.json            # Dependencias y scripts
└── README.md               # Este archivo
```


🧪 Configuración y Ejecución Local
1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/jyj.git
cd jyj
```

2. Instalar Dependencias
Asegúrate de tener Node.js y npm (o yarn / pnpm) instalados.

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecutar en Modo Desarrollo
Esto iniciará un servidor local con recarga en vivo:

```bash
npm run dev
El sitio estará disponible en http://localhost:4321
```

4. Construir para Producción

```bash
npm run build
Los archivos estáticos se generarán en la carpeta dist/.
```

5. Previsualizar la Versión de Producción

```bash
npm run preview
```