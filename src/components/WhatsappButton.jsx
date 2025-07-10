// src/components/WhatsappButton.jsx
import WhatsappIcon from './icons/WhatsappIcon.jsx';

export default function WhatsappButton() {
  // Reemplaza con el número de WhatsApp de tu empresa (si aún no lo hiciste)
  const whatsappNumber = '51992198315'; // Ejemplo: Cambia esto al número de J&J
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-15 right-15 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out flex items-center justify-center"
  aria-label="Contactar por WhatsApp"
  title="Contactar por WhatsApp"
  data-astro-transition-persist="whatsapp-button"
>
  <WhatsappIcon size="w-8 h-8 md:w-10 md:h-10" color="text-white" />
</a>

  );
}