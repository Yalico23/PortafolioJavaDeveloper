import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { habilidades } from "../assets/skills";

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Habilidades: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const items = itemsRef.current;

    if (!container || items.length === 0) return;

    // Buscar el contenedor con scroll (section con overflow-y-auto)
    const scrollContainer = container.closest('section');

    // Limpiar animaciones previas
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Configurar ScrollTrigger para usar el contenedor con scroll
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    // Configurar animación inicial - elementos ocultos
    gsap.set(items, {
      opacity: 0,
      y: 50,
      scale: 0.8
    });

    // Crear animación para cada elemento
    items.forEach((item, index) => {
      if (!item) return;

      gsap.to(item, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
          scroller: scrollContainer, // Usar el contenedor padre como scroller
          refreshPriority: -1,
        },
        delay: index * 0.1 // Stagger effect
      });

      // Animación adicional para la imagen
      const img = item.querySelector('img');
      if (img) {
        gsap.fromTo(img,
          {
            scale: 0.5,
            rotation: -10
          },
          {
            scale: 1,
            rotation: 0,
            duration: .5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
              scroller: scrollContainer,
              refreshPriority: -1
            },
            delay: (index * 0.1) + 0.3
          }
        );
      }

      // Animación para el texto
      const title = item.querySelector('h2');
      const description = item.querySelector('p');

      if (title) {
        gsap.fromTo(title,
          {
            x: -30,
            opacity: 0
          },
          {
            x: 0,
            opacity: .7,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
              scroller: scrollContainer,
              refreshPriority: -1
            },
            delay: (index * 0.1) + 0.2
          }
        );
      }

      if (description) {
        gsap.fromTo(description,
          {
            x: 30,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
              scroller: scrollContainer,
              refreshPriority: -1
            },
            delay: (index * 0.1) + 0.4
          }
        );
      }
    });

    // Refrescar ScrollTrigger después de configurar
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Función para agregar referencias a los elementos
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current[index] = el;
    }
  };

  return (
    <div ref={containerRef}>
      {habilidades.map((ti, index) => (
        <div
          key={ti.nombre}
          ref={(el) => addToRefs(el, index)}
          className="p-5 skill-item md:flex items-center gap-5"
        >
          <div className='w-full md:w-[85%]'>
            <h2 className='text-2xl font-bold text-white'>{ti.nombre}</h2>
            <p>{ti.descripcion}</p>
          </div>
          <img src={ti.img} alt={`img ${ti.nombre}`}  className='h-24 mx-auto my-5'/>
        </div>
      ))}
    </div>
  );
};

export default Habilidades;