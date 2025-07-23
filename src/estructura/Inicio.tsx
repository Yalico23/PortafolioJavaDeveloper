import { useState, useEffect } from 'react';

const Inicio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "/images/perfil.png", alt: "Perfil" },
    { src: "/images/nttdata.jpeg", alt: "NTT Data" },
    { src: "/images/blockchain.jpeg", alt: "Blockchain" }
  ];

  // Auto-slide cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <div className="flex flex-col items-center h-full justify-evenly">
        <h2 className="text-2xl font-bold mb-4">¿Quién soy?</h2>
        <p className="text-center max-w-4xl px-4 mb-6">
          Actualmente soy estudiante de ingeniería de sistemas en último ciclo, enfocado en desarrollo con Spring y React, enfocado en diseño en microservicios. Participo en workshops y conferencias para mejorar mis habilidades y aprender de otros profesionales en el campo.
        </p>

        <div className="w-full max-w-2xl">

          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${index === currentSlide ? 'block' : 'hidden'
                    } duration-700 ease-in-out`}
                  data-carousel-item={index === currentSlide ? 'active' : ''}
                  
                >
                  <img
                    src={image.src}
                    className="absolute block w-full h-full object-contain"
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>

            {/* Indicadores */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide
                      ? 'bg-white'
                      : 'bg-white/50 hover:bg-white/75'
                    }`}
                  aria-current={index === currentSlide}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Botón Anterior */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={goToPrevious}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            {/* Botón Siguiente */}
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              onClick={goToNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;