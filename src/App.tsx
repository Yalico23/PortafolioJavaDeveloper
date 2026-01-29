import { Outlet } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Preload2 from "./components/Preload2";
import LinkedIn from "./assets/icons/LinkedIn";
import WhatsApp from "./assets/icons/WhatsApp";
import Email from "./assets/icons/Email";

const App = () => {

  const [Spinner, setSpinner] = useState(true);
  const contenedorRef = useRef(null);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/habilidades", label: "Habilidades y Tecnologías" },
    { to: "/proyectos", label: "Proyectos" },
    { to: "/experiencia", label: "Experiencia" },
    { to: "/certificados", label: "Certificados" }
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
    return <Preload2 />;
  }

  return (
    <>
      <main id="contenedor" ref={contenedorRef} className="opacity-0">
        <div className="border-[1px] border-gray-300 block md:flex gap-x-10 relative" id="app">
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
                <li key={item.to} className="font-[Quicksand] cursor-pointer li">
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
              <li className="pt-5"><a href="https://www.linkedin.com/in/oscar-yalico" target="_blank" rel="noopener noreferrer" className="flex hover:text-blue-600 transition-all duration-150">
                <LinkedIn /> <span className="px-3">LinkedIn</span>
              </a></li>
              <li><a href="https://www.linkedin.com/in/oscar-yalico" target="_blank" rel="noopener noreferrer" className="flex hover:text-green-600 transition-all duration-150">
                <WhatsApp /> <span className="px-3">WhatsApp</span>
              </a></li>
              <li><a href="mailto:jeanpiero_23_01@hotmail.com?subject=Interesado%20en%20tus%20servicios%20de%20desarrollo&body=Hola%20Oscar%2C%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20un%20proyecto%20de%20software.%20%C2%BFCu%C3%A1les%20son%20tus%20disponibilidades%3F" className="flex hover:text-gray-600 transition-all duration-150">
                <Email /> <span className="px-3">Email</span>
              </a></li>
            </ul>
          </aside>
          <section className="w-full p-5 h-full overflow-y-auto" id="section">
            <Outlet />
          </section>
        </div>
      </main>
    </>
  )
}

export default App