# J&J Servicios Generales 🛠️

![Vista previa del sitio de J&J Servicios Generales](./src/assets/jyjweb.png)

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

- 🔍 **SEO Amigable**: Implementación de títulos y descripciones dinámicas.
- 🧵 **Breadcrumbs Simplificados**: Mostrados en el componente `PageHero` como texto plano para mejor guía visual.

---

## 📁 Estructura del Proyecto

```bash
.
├── dist/                   # Carpeta de salida de la compilación para producción
├── public/                 # Archivos estáticos (imágenes, fuentes, favicons)
│   └── images/
├── src/                    # Código fuente del proyecto
│   ├── assets/             # Assets procesados por Astro (imágenes, etc.)
│   │   └── jyjweb.png
│   ├── components/         # Componentes reutilizables de Astro (.astro)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PageHero.astro
│   │   ├── ServiceCard.astro
│   │   └── SectionTitle.astro
│   ├── layouts/    
│   │   ├── layout.astro        # Plantillas de página (.astro)
│   │   └── Pagelayout.astro
│   ├── pages/              # Páginas y rutas del sitio (.astro)
│   │   ├── index.astro
│   │   ├── nosotros.astro
│   │   ├── contacto.astro
│   │   ├── proyectos.astro
│   │   └── servicios/
│   │       ├── index.astro
│   │       ├── drywall.astro
│   │       ├── electricidad.astro
│   │       └── pintura.astro
│   └── styles/             # Estilos globales CSS
│       └── global.css
├── .gitignore              # Archivos y carpetas ignorados por Git
├── astro.config.mjs        # Archivo de configuración de Astro
├── package.json            # Metadatos y dependencias del proyecto
└── README.md               # Este archivo
├── tailwind.config.mjs     # Archivo de configuración de Tailwind CSS
└── tsconfig.json           # Archivo de configuración de TypeScript
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