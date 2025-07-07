// src/components/MobileMenu.jsx (ejemplo con Preact/React)
import { useState, useEffect, useRef } from 'preact/hooks'; // o 'react' para React

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); // Para el menú
    const buttonRef = useRef(null); // Para el botón

    // Efecto para controlar el scroll del body
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        // Limpieza del efecto cuando el componente se desmonte
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]); // Dependencia en isOpen

    // Efecto para cerrar el menú al hacer clic fuera o redimensionar
    useEffect(() => {
        function handleClickOutside(event) {
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

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('resize', handleResize);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        }

        // Limpieza: eliminar event listeners cuando el componente se desmonta o isOpen cambia
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]); // Dependencia en isOpen

    // Función para cerrar el menú al hacer clic en un enlace (dentro del menú)
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
            >
                <svg className={`w-8 h-8 ${isOpen ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg className={`w-8 h-8 ${isOpen ? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {isOpen && (
                <div
                    ref={menuRef}
                    id="mobile-menu" // Este ID es solo por si lo necesitas para CSS externo
                    className="absolute top-0 left-0 w-full bg-[var(--color-jj-dark)] p-4 pt-16 shadow-lg z-40 transition-all ease-out duration-300"
                    style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(-16px)',
                        visibility: isOpen ? 'visible' : 'hidden' // Mejor que 'hidden' para animaciones
                    }}
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
                            <a href="/contacto" onClick={closeMenuOnLinkClick} className="block px-6 py-3 font-semibold text-center mt-4">Contacto</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}