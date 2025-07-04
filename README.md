# J&J Servicios Generales

![Captura de pantalla del sitio web de J&J Servicios Generales](254shots_so.png)
## Descripción del Proyecto

Este es el sitio web oficial de J&J Servicios Generales, diseñado para presentar nuestros servicios de Drywall, Pintura y Electricidad, así como para informar a nuestros clientes sobre quiénes somos y cómo contactarnos. El proyecto está construido con **Astro** para un rendimiento web de vanguardia y **Tailwind CSS** para un desarrollo de estilos ágil y altamente personalizable.

## Tecnologías Utilizadas

* **Astro**: Un moderno framework de construcción de sitios web que ofrece rendimiento, flexibilidad y una gran experiencia de desarrollo.
* **Tailwind CSS**: Un framework CSS "utility-first" que permite construir diseños personalizados rápidamente, sin escribir CSS tradicional.
* **TypeScript**: Utilizado en componentes y scripts para una mejor robustez y mantenibilidad del código.

## Características Principales

* **Rendimiento Optimizado**: Gracias a la arquitectura de "Island Architecture" de Astro, el sitio es increíblemente rápido y ligero.
* **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla (escritorio, tablet, móvil) gracias a Tailwind CSS.
* **Componentización Modular**: Estructura de componentes reutilizables (`Header`, `Footer`, `PageHero`, `ServiceCard`, `SectionTitle`, etc.) que facilita el mantenimiento y la escalabilidad.
* **Páginas de Servicio Dedicadas**: Cada servicio (Drywall, Pintura, Electricidad) tiene su propia página detallada.
* **Navegación Activa Inteligente**: El menú de navegación (`Header`) resalta el enlace "Servicios" cuando se está en cualquiera de las páginas de servicios (principal o sus subpáginas).
* **SEO Amigable**: Implementación de títulos y descripciones (`<meta name="description">`) dinámicos para una mejor indexación en motores de búsqueda.
* **Breadcrumbs Simplificados**: Integrados directamente en el `PageHero`, mostrando la ruta de la página como texto plano para una mejor guía visual sin redundar con la navegación principal.

## Estructura del Proyecto

El proyecto sigue una estructura limpia y organizada:

├── public/                 # Archivos estáticos (imágenes, favicons, etc.)
│   └── images/             # Imágenes del sitio
├── src/                    # Código fuente de Astro
│   ├── components/         # Componentes reutilizables de UI
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PageHero.astro
│   │   ├── ServiceCard.astro
│   │   └── SectionTitle.astro
│   ├── layouts/            # Layouts principales para las páginas
│   │   └── layout.astro
│   ├── pages/              # Archivos de páginas (rutas)
│   │   ├── index.astro     # Página de inicio
│   │   ├── nosotros.astro  # Página "Sobre Nosotros"
│   │   ├── contacto.astro  # Página de Contacto
│   │   ├── proyectos.astro # Página de Proyectos (aún por desarrollar contenido)
│   │   └── servicios/
│   │       ├── index.astro # Página principal de Servicios
│   │       ├── drywall.astro # Detalle del servicio de Drywall
│   │       ├── electricidad.astro # Detalle del servicio de Electricidad
│   │       └── pintura.astro # Detalle del servicio de Pintura
│   └── styles/             # Estilos globales y de Tailwind
│       └── global.css
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind CSS
├── package.json            # Dependencias y scripts del proyecto
└── README.md               # Este archivo


## Configuración y Ejecución Local

Sigue estos pasos para poner el proyecto en marcha en tu máquina local:

### 1. Clonar el Repositorio

```bash
git clone <URL_DEL_TU_REPOSITORIO>
cd jyj # O el nombre de tu carpeta de proyecto
2. Instalar Dependencias
Asegúrate de tener Node.js y npm (o yarn/pnpm) instalados.

Bash

npm install
# o yarn install
# o pnpm install
3. Ejecutar en Modo Desarrollo
Esto iniciará un servidor de desarrollo local con recarga en vivo.

Bash

npm run dev
El sitio estará disponible en http://localhost:4321/ (o el puerto que Astro asigne).

4. Construir para Producción
Para generar una versión optimizada y lista para desplegar de tu sitio:

Bash

npm run build
Los archivos estáticos se generarán en la carpeta dist/.

5. Previsualizar la Versión de Producción
Para probar la versión construida antes de desplegar:

Bash

npm run preview
Uso y Personalización
Componentes: Explora la carpeta src/components/ para entender la estructura de cada elemento de la UI.

Páginas: Cada archivo .astro en src/pages/ representa una ruta de tu sitio web. Modifica su contenido para actualizar la información.

Estilos: Personaliza los estilos en tailwind.config.mjs y src/styles/global.css. Todas las clases de utilidad provienen de Tailwind CSS.

Datos: Para servicios, proyectos, etc., se recomienda crear archivos .ts o .json en una carpeta src/data/ para una mejor gestión y reutilización.