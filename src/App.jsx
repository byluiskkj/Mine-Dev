import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Registro from './Pages/Register/Registro'
import Home from  './Pages/Home/Home'

function App() {

  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Registro" element={<Registro />} /> 
    <Route path="/Login" element={<Login />} />
    <Route path="*" element={<h1 className="error-h1">Nada aqui boy, volte vai</h1>} /> 
  </Routes>
</BrowserRouter>


  )
}

export default App
