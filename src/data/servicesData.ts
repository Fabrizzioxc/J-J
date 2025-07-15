// src/data/servicesData.ts
import drywallImage from '@assets/servicios/drywall.webp';
import pinturaImage from '@assets/servicios/pintura.webp';
import cielorasosImage from '@assets/servicios/cielorasos.webp';
import aireAcondicionadoImage from '@assets/servicios/aire-acondicionado.webp';
import electricidadImage from '@assets/servicios/electricidad.webp';
import melaminaImage from '@assets/servicios/melamina.webp';

export const servicesCardsData = [
    {
        id: 'drywall',
        imageSrc: drywallImage,
        imageAlt: 'Servicio de Construcción con Sistema Drywall',
        title: 'Drywall',
        paragraph: 'Expertos en tabiquería, muros y estructuras con sistema Drywall. Soluciones rápidas, limpias y versátiles para tus proyectos.',
        link: '/servicios/drywall'
    },
    {
        id: 'pintura',
        imageSrc: pinturaImage,
        imageAlt: 'Servicio de Pintura General',
        title: 'Pintura General',
        paragraph: 'Renovamos tus espacios con acabados de alta calidad. Pintura de interiores, exteriores, fachadas y texturas decorativas.',
        link: '/servicios/pintura'
    },
    {
        id: 'cielo-rasos',
        imageSrc: cielorasosImage,
        imageAlt: 'Servicio de Instalación y Diseño de Cielo Rasos',
        title: 'Cielo Rasos',
        paragraph: 'Instalación y diseño de cielorrasos modernos y funcionales. Soluciones estéticas y acústicas para todo tipo de ambientes.',
        link: '/servicios/cielorasos'
    },
    {
        id: 'electricidad',
        imageSrc: electricidadImage,
        imageAlt: 'Servicio de Instalaciones Eléctricas',
        title: 'Instalaciones Eléctricas',
        paragraph: 'Proyectos eléctricos seguros y eficientes. Desde nuevas instalaciones hasta mantenimiento, reparaciones y certificaciones.',
        link: '/servicios/electricidad'
    }
];