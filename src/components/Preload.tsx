import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preload = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", stagger: 0.1 }
    );
  }, []);

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <h1 ref={textRef} className="text-white text-4xl font-mono tracking-wider">
        Cargando OscarYalico.dev...
      </h1>
    </div>
  );
};

export default Preload;