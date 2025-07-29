import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Inicio = () => {

  const images = [
    { src: "/images/perfil.png", alt: "Perfil" },
    { src: "/images/nttdata.png", alt: "NTT Data" },
    { src: "/images/blockchain.png", alt: "Blockchain" }
  ];

  return (
    <>
      <div className="flex flex-col items-center h-full justify-evenly">
        <h2 className="text-2xl font-bold mb-4">¿Quién soy?</h2>
        <p className="text-center max-w-4xl px-4 mb-6">
          Actualmente soy estudiante de ingeniería de sistemas en último ciclo, enfocado en desarrollo con Spring y React, enfocado en diseño en microservicios. Participo en workshops y conferencias para mejorar mis habilidades y aprender de otros profesionales en el campo.
        </p>

        <div className="w-full max-w-2xl">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="my-swiper"
          >
            {images.map((image) => (
              <SwiperSlide key={image.alt} className='slide-content'>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-96 z-10 object-cover object-right fade-radial"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Inicio;