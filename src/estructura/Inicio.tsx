const Inicio = () => {

  return (
    <>
      <div className="flex flex-col items-center h-full justify-evenly">
        <h2>¿Quien soy?</h2>
        <p>Actualmente soy estudiante de ingenieria de sistemas en último ciclo, enfocado en desarrollo con Spring y React, enfocado en diseño en microservicios. Participo en workshops y conferencias para mejorar mis habilidades y aprender de otros profesionales en el campo.</p>
        <div>
          <img src="/images/perfil.png" alt="perfil" className="w-60" />
          <img src="/images/nttdata.jpeg" alt="NTT Data" className="w-60" />
          <img src="/images/blockchain.jpeg" alt="blockchain" className="w-60" />
        </div>
      </div>
    </>
  )
}

export default Inicio