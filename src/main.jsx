import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contador from './Contador'
import HelloWorld from './HelloWorld'
import FirstComponent from './FirstComponent'
import PanelUsuario from './Renderizado'
import Render2 from './Render2'
import Funciones from './Funciones'
import FuncionMap from './FuncionMap'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Contador/>    
    <HelloWorld />
    <FirstComponent/>
    <PanelUsuario/>    
    <Render2/>
    <Funciones/>
    <FuncionMap/>

      


  </StrictMode>,
)
