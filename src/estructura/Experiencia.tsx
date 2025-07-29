
const Experiencia = () => {

  const experiencia = [
    {
      id: 1,
      fecha: "Abril 2025 - Julio 2025",
      titulo: "Desarrollador de back-end Java - React",
      tipoContrato: "Prácticas pre-profesionales",
      empresa: "ZonaTech Perú",
      descripcion: "Contruccion de ApiRest con Spring y React con integración de inteligencia Artificial y servicios en la nube con AWS."
    },
    {
      id: 2,
      fecha: "Enero 2024 - Marzo 2025",
      titulo: "Desarrollador de software",
      tipoContrato: "Proyecto",
      empresa: "HRF GROUP S.A.C",
      descripcion: "Se desarrolló un software con integración de servicios en la nube y automatización para entrevistas laborales."
    }
  ]

  return (
    <>
      <div>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {experiencia.map((item) => (
            <li key={item.id} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none">{item.fecha}</time>
              <h3 className="text-lg font-semibold">{item.titulo}</h3>
              <h4>Trabajo por {item.tipoContrato} en <span className="font-bold">{item.empresa}</span></h4>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.descripcion}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default Experiencia