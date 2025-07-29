import Email from "../assets/icons/Email"
import LinkedIn from "../assets/icons/LinkedIn"
import WhatsApp from "../assets/icons/WhatsApp"

const Contactame = () => {
  return (
    <>
      <div>
        <h2>Contáctame</h2>
        <p>Si deseas más información, no dudes en contactarme.</p>
        <a href="https://www.linkedin.com/in/oscar-yalico" target="_blank" rel="noopener noreferrer">
          <LinkedIn className="text-[#5d656d] inline-block size-16" />
        </a>
        <a href="https://wa.me/51941077834?text=Hola%20Oscar%2C%20vi%20tu%20perfil%20como%20desarrollador%20de%20software%20y%20me%20gustar%C3%ADa%20coordinar%20una%20entrevista%20contigo.%20%C2%BFEst%C3%A1s%20disponible%3F" target="_blank" rel="noopener noreferrer">
          <WhatsApp className="text-[#5d656d] inline-block size-16" />
        </a>

        <a href="mailto:jeanpiero_23_01@hotmail.com?subject=Interesado%20en%20tus%20servicios%20de%20desarrollo&body=Hola%20Oscar%2C%20vi%20tu%20perfil%20y%20me%20gustar%C3%ADa%20conversar%20contigo%20sobre%20un%20proyecto%20de%20software.%20%C2%BFCu%C3%A1les%20son%20tus%20disponibilidades%3F">
          <Email className="text-[#5d656d] inline-block size-16" />
        </a>

      </div>
    </>
  )
}

export default Contactame