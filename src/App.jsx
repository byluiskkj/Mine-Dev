import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Registro from './Pages/Register/Registro'
import Home from  './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import SobreMim from './Pages/SobreMim/SobreMim'
import SobreSite from './Pages/SobreSite/SobreSite'
import Services from './Pages/Services/services'
import Trust from './Pages/Trust/trust'

function App() {

  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/Cart' element={<Cart/>} />
    <Route path="/Registro" element={<Registro />} /> 
    <Route path="/Login" element={<Login />} />
    <Route path="/SobreSite" element={<SobreSite />} />
    <Route path="/SobreMim" element={<SobreMim />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/Trust" element={<Trust />} />
    <Route path="*" element={<h1 className="error-h1">Nada aqui boy, volte vai</h1>} /> 
  </Routes>
</BrowserRouter>


  )
}

export default App
