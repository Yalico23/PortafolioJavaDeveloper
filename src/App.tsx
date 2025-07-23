import { Outlet } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import Preload from "./components/Preload";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const App = () => {

  const [Spinner, setSpinner] = useState(true);
  const contenedorRef = useRef(null);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/proyectos", label: "Proyectos" },
    { to: "/experiencia", label: "Experiencia" },
    { to: "/contactame", label: "Contáctame" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinner(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!Spinner && contenedorRef.current) {
      gsap.fromTo(contenedorRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [Spinner]);

  if (Spinner) {
    return <Preload />;
  }

  return (
    <>
      <main id="contenedor" ref={contenedorRef} className="opacity-0">
        <div className="border-[1px] border-gray-300 flex gap-x-10 relative" id="app">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
            <source src="/videos/bg3.mp4" type="video/mp4" />
          </video>
          <aside className="p-5">
            <h1 className="font-[Bitcount Single] text-6xl">Oscar Yalico</h1>
            <p className="font-[PT Sans] text-2xl">Java Developer</p>
            <ul className="mt-8 space-y-4">
              {navItems.map((item) => (
                <li key={item.to} className="font-[Quicksand] cursor-pointer">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `transition-all duration-150 ${isActive ? "font-bold text-[#faf9f9]" : "text-gray-400"
                      }`
                    }
                  >
                    {({ isActive }) => (isActive ? `» ${item.label}` : item.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </aside>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default App