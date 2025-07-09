import { useEffect, useRef, useState } from 'preact/hooks';
import AsteriskIcon from '@icons/AsteriskIcon.jsx';

const services = ["Pintura", "Remodelaciones", "Drywall", "Electricidad", "Acabados"];

export default function ScrollingBanner() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [clones, setClones] = useState(2); // inicializamos con 2 duplicados

  // Dinámicamente calculamos cuántas veces necesitamos duplicar el contenido
  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;

    if (!container || !scroll) return;

    const singleContentWidth = scroll.scrollWidth / clones;
    const containerWidth = container.offsetWidth;

    // Asegura que el contenido sea mínimo el doble del ancho del contenedor
    const neededClones = Math.ceil((containerWidth * 10) / singleContentWidth);
    setClones(neededClones);
  }, []);

  // Scroll animado
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let animationId;
    let x = 0;

    const step = () => {
      x += 0.1; // Velocidad de desplazamiento
      if (x >= scroll.scrollWidth / 2) {
        x = 0;
      }
      scroll.style.transform = `translateX(-${x}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [clones]);

  // Construye los elementos duplicados (ahora pares de icono y palabra)
  const fullList = Array.from({ length: clones }, () => services).flat();

  return (
    <section class="w-full bg-[var(--color-jj-accent)] py-4 overflow-hidden text-[var(--color-jj-dark)]">
      <div ref={containerRef} class="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          // El 'gap-x-8' ahora aplica el espacio entre *cada* elemento directo dentro de este div
          class="flex whitespace-nowrap font-bold text-xl md:text-2xl gap-x-8 will-change-transform"
        >
          {fullList.map((service, idx) => (
            // Aquí puedes decidir si quieres que cada "icono + palabra" sea un grupo lógicamente
            // Si quieres el icono y la palabra completamente separados con el gap entre ellos:
            <>
              {/* Icono separado */}
              <div key={`icon-${idx}`} class="flex items-center flex-shrink-0">
                <AsteriskIcon class="text-[var(--color-jj-dark)]" size={24} />
              </div>
              {/* Palabra separada */}
              <div key={`service-${idx}`} class="flex items-center flex-shrink-0">
                <span class="whitespace-nowrap">{service}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}