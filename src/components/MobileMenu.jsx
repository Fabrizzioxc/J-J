// src/components/MobileMenu.jsx (Preact)
import { useState, useEffect, useRef } from 'preact/hooks';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // Efecto para controlar el scroll del body
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Efecto para cerrar el menú al hacer clic fuera o redimensionar
    useEffect(() => {
        function handleClickOutside(event) {
            // Asegúrate de que el clic no sea en el botón o en el menú
            if (menuRef.current && !menuRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        function handleResize() {
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        }

        // Solo añade los listeners cuando el menú está abierto
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('resize', handleResize);
        }

        // Limpieza: siempre remueve los listeners al desmontar o cuando isOpen cambia
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]); // Dependencia en isOpen

    const closeMenuOnLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <div className="md:hidden">
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="text-[var(--color-jj-text-light)] text-3xl z-50 relative"
                aria-expanded={isOpen ? "true" : "false"} // Para accesibilidad
                aria-controls="mobile-menu-content" // ID del contenedor del menú
            >
                {/* Renderizar AMBOS SVGs siempre y controlar visibilidad con CSS */}
                <svg className={`w-8 h-8 absolute top-0 left-0 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className={`w-8 h-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {/* Asegúrate de que los SVGs tengan un texto alternativo o sean aria-hidden */}
                <span className="sr-only">{isOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
            </button>

            {/* El menú siempre está en el DOM, pero su visibilidad es controlada por clases */}
            <div
  ref={menuRef}
  id="mobile-menu-content"
  className={`absolute top-0 left-0 w-full bg-[var(--color-jj-dark)] p-4 pt-16 shadow-lg z-40
             transition-opacity duration-300 md:hidden
             ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                // Añadir role y aria-hidden para accesibilidad cuando está oculto
                role="dialog"
                aria-modal="true"
                aria-hidden={!isOpen}
            >
                <ul className="flex flex-col space-y-4 text-center">
                    <li>
                        <a href="/" onClick={closeMenuOnLinkClick} className="block text-2xl font-semibold py-2 rounded transition-colors">Inicio</a>
                    </li>
                    <li>
                        <a href="/nosotros" onClick={closeMenuOnLinkClick} className="block text-2xl font-semibold py-2 rounded transition-colors">Nosotros</a>
                    </li>
                    <li>
                        <a href="/servicios" onClick={closeMenuOnLinkClick} className="block text-2xl font-semibold py-2 rounded transition-colors">Servicios</a>
                    </li>
                    <li>
                        <a href="/proyectos" onClick={closeMenuOnLinkClick} className="block text-2xl font-semibold py-2 rounded transition-colors">Proyectos</a>
                    </li>
                    <li>
                        <a href="/contacto" onClick={closeMenuOnLinkClick} className="block text-2xl font-semibold py-2 rounded transition-colors">Contacto</a>
                    </li>
                    <li>
                        <a href="/contacto" onClick={closeMenuOnLinkClick} className="block px-6 py-3 font-semibold text-center mt-4 bg-[var(--color-jj-accent)] text-[var(--color-jj-dark)] hover:opacity-90 transition-opacity">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}