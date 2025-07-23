import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Proyectos from './estructura/Proyectos'
import Inicio from './estructura/Inicio'
import Experiencia from './estructura/Experiencia'
import Contactame from './estructura/Contactame'
import Habilidades from './estructura/Habilidades'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route path="/" element={<Inicio/>} index/>
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/proyectos" element={<Proyectos/>} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/contactame" element={<Contactame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router