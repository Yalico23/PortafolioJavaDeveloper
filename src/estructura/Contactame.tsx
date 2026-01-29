import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const certificados = () => {

  const certificados = [
    {
      nombre: "DevOps Foundation",
      img: "/certificaciones/devops.avif",
    },
    {
      nombre: "Scrum Developer",
      img: "/certificaciones/scrum.avif",
    },
    {
      nombre: "Inglés",
      img: "/certificaciones/ingles.avif",
    }
  ]

  return (
    <>
      <div className="h-full flex flex-col items-center justify-evenly">
        <h2 className="text-4xl py-3">Certificaciones</h2>
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
            {certificados.map((image) => (
              <SwiperSlide key={image.nombre} className='slide-content'>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={image.img}
                    alt={image.nombre}
                    className="h-96 z-10 object-cover object-right fade-radial"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </>
  )
}

export default certificados