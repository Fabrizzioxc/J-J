// src/components/ui/ContactForm.jsx
import { useState, useEffect } from 'preact/hooks'; // Importa useEffect también

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null); // Estado para el mensaje del toast
  const [toastType, setToastType] = useState(''); // Estado para el tipo de toast ('success' o 'error')

  // useEffect para manejar la visibilidad del toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null); // Oculta el toast después de 3 segundos
        setToastType('');
      }, 3000); // Duración del toast en milisegundos

      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta o el mensaje cambia
    }
  }, [toastMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setToastMessage(null); // Oculta cualquier toast anterior antes de enviar
    setIsSubmitting(true);

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      if (response.ok) {
        form.reset();
        setToastMessage('¡Formulario enviado con éxito! Te responderemos pronto.');
        setToastType('success');
      } else {
        const errorData = await response.json();
        console.error('Error al enviar el formulario:', errorData);
        setToastMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        setToastType('error');
      }
    } catch (error) {
      console.error('Error de red o inesperado:', error);
      setToastMessage('Error de conexión. Por favor, revisa tu conexión a internet.');
      setToastType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form action="https://formspree.io/f/xjkobgya" method="POST" onSubmit={handleSubmit} class="bg-white flex flex-col h-full justify-between" style="border-radius: 0;">
        {/* Tus campos de formulario */}
        <input type="text" name="fullName" placeholder="Nombre Completo *" required class="block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-[var(--color-jj-accent)] focus:border-[var(--color-jj-accent)] outline-none mb-4" style="border-radius: 0;" />
        <input type="tel" name="phoneNumber" placeholder="Número Telefónico *" required class="block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-[var(--color-jj-accent)] focus:border-[var(--color-jj-accent)] outline-none mb-4" style="border-radius: 0;" />
        <textarea name="message" rows="6" placeholder="Mensaje" class="block w-full px-4 py-3 border border-gray-300 shadow-sm focus:ring-[var(--color-jj-accent)] focus:border-[var(--color-jj-accent)] outline-none mb-4" style="border-radius: 0;"></textarea>

        <div class="mt-40">
          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full bg-[var(--color-jj-accent)] text-[var(--color-jj-dark)] px-6 py-3 border border-transparent text-lg font-semibold shadow-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-jj-accent)]"
            style="border-radius: 0;"
          >
            {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
          </button>
        </div>
      </form>

      {/* Aquí renderizamos nuestro toast personalizado */}
      {toastMessage && (
        <div class={`
          animate-slide-in-bottom fixed bottom-4 right-4 p-4 rounded-md shadow-lg text-white z-[9999]
          ${toastType === 'success' ? 'bg-green-500' : 'bg-red-500'}
          transition-all duration-300 ease-in-out
          ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          {toastMessage}
        </div>
      )}
    </>
  );
}