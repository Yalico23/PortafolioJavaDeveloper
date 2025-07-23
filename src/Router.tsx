import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Proyectos from './estructura/Proyectos'
import Inicio from './estructura/Inicio'
import Experiencia from './estructura/Experiencia'
import Contactame from './estructura/Contactame'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route path="/" element={<Inicio/>} index/>
            <Route path="/proyectos" element={<Proyectos/>} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/contactame" element={<Contactame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router