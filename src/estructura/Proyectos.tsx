import { useState } from 'react';
import { Github, ExternalLink, Code2, Database, Cloud, Shield, Cpu, Monitor, Server, Layers } from 'lucide-react';

const Proyectos = () => {
  type Imagen = {
    titulo: string;
    url: string;
  };

  const [selectedImage, setSelectedImage] = useState<Imagen | null>(null);

  const proyectos = [
    {
      titulo: "Sistema de E-learning en entrevistas y evaluaciones automatizadas con IA y servicios en la nube (En desarrollo)",
      descripcion: "Desarrollo de un sistema de e-learning que utiliza inteligencia artificial para realizar entrevistas y evaluaciones automatizadas,usando un interprete de audio a texto de OpenAiWhisper, integrando servicios en la nube para almacenamiento y procesamiento de datos.",
      tecnologias: [
        { name: "React", icon: Monitor, color: "text-blue-400" },
        { name: "Spring Boot", icon: Server, color: "text-green-400" },
        { name: "AWS", icon: Cloud, color: "text-orange-400" },
        { name: "Docker", icon: Layers, color: "text-blue-300" },
        { name: "MySQL", icon: Database, color: "text-blue-500" },
        { name: "IA", icon: Cpu, color: "text-purple-400" },
        { name: "Spring JPA", icon: Database, color: "text-green-300" },
        { name: "Spring Security", icon: Shield, color: "text-red-400" },
        { name: "Spring MVC", icon: Code2, color: "text-green-500" },
        { name: "Spring Data", icon: Server, color: "text-emerald-400" },
        { name: "Clean Code", icon: Code2, color: "text-purple-500" },
        { name: "Whisper", icon: Code2, color: "text-purple-500" },
      ],
      video: "/projects/zonatech/elearning.mp4",
      github: "https://github.com/Yalico23/Zonatech-Evaluacion-Entrevista-Automatizadas",
      arquitectura : "/projects/zonatech/arquitectura.jpg",
      imagenes: [
        {
          titulo: "Antiplagio de evaluaciones",
          url: "/projects/zonatech/antiplagio.webp"
        },
        {
          titulo: "Entrevista Automatizada",
          url: "/projects/zonatech/entrevistas.webp"
        },
        {
          titulo: "Evaluacion de estudiantes",
          url: "/projects/zonatech/evaluacionesEstudiantes.webp"
        },
        {
          titulo: "Evaluaciones Pendientes",
          url: "/projects/zonatech/evaluacionesPendientes.webp"
        },
        {
          titulo: "Evaluacion con IA",
          url: "/projects/zonatech/evaluacionIa.webp"
        },
        {
          titulo: "login",
          url: "/projects/zonatech/login.webp"
        },
        {
          titulo: "Bandeja de correo recuperar contraseña",
          url: "/projects/zonatech/mensajeria.webp"
        },
        {
          titulo: "Paginacion con el servidor",
          url: "/projects/zonatech/paginables.webp"
        }
      ]
    }
  ];

  const openImageModal = (imagen: any) => {
    setSelectedImage(imagen);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            Mis Proyectos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre las soluciones innovadoras que he desarrollado, combinando tecnologías modernas con diseño centrado en el usuario
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-12">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.titulo}
              className="group relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Project Title */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {proyecto.titulo}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {proyecto.descripcion}
                  </p>
                </div>

                {/* Video Section */}
                {proyecto.video && (
                  <div className="mb-8">
                    <div className="relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                      <video
                        src={proyecto.video}
                        controls
                        className="w-full h-64 md:h-80 object-cover"
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect width='1200' height='600' fill='%23111827'/%3E%3C/svg%3E"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Code2 className="mr-2 text-blue-400" size={24} />
                    Tecnologías Utilizadas
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {proyecto.tecnologias.map((tech, techIndex) => {
                      const IconComponent = tech.icon;
                      return (
                        <div
                          key={techIndex}
                          className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/tech"
                        >
                          <IconComponent className={`mr-2 ${tech.color} group-hover/tech:scale-110 transition-transform duration-300`} size={20} />
                          <span className="text-gray-200 text-sm font-medium">{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Images Gallery */}
                {proyecto.imagenes && proyecto.imagenes.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Monitor className="mr-2 text-purple-400" size={24} />
                      Capturas del Proyecto
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {proyecto.imagenes.map((imagen, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="group/img cursor-pointer"
                          onClick={() => openImageModal(imagen)}
                        >
                          <div className="relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                            <img
                              src={imagen.url}
                              alt={imagen.titulo}
                              className="w-full h-48 object-cover group-hover/img:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover/img:translate-y-0 opacity-0 group-hover/img:opacity-100 transition-all duration-300">
                              <h4 className="text-white font-medium text-sm">{imagen.titulo}</h4>
                            </div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                              <ExternalLink className="text-white" size={16} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    Arquitectura del Proyecto
                  </h3>
                  <img
                    src={proyecto.arquitectura}
                    alt="Arquitectura del Proyecto"
                    className="w-full h-auto rounded-xl border border-white/10"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {proyecto.github && (
                    <a
                      href={proyecto.github}
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                      target='_blank'
                    >
                      <Github className="mr-2" size={20} />
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full overflow-hidden">
            <img
              src={selectedImage.url}
              alt={selectedImage.titulo}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
              <h3 className="text-white text-xl font-semibold">{selectedImage.titulo}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos;