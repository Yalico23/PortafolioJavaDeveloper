import { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import gsap from 'gsap';

const Preload2 = () => {
  const preloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preloadRef.current) {
      gsap.fromTo(
        preloadRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div
      ref={preloadRef}
      className="flex justify-center items-center flex-col h-screen w-screen"
    >
      <p>Cargando OscarYalico.dev...</p>
      <DotLottieReact
        src="https://lottie.host/ced3c868-90b9-4d9a-93bd-fa27091ab0c5/xcMj8XLruP.lottie"
        loop
        autoplay
        className="h-72"
      />
    </div>
  );
};

export default Preload2;
