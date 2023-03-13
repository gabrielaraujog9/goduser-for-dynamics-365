import {Routes, Route} from "react-router-dom";

import {Formulario} from "./pages/Formulario"
import {Navegacao} from "./pages/Navegacao"

export function RoutesComponent(){
  return(
    <Routes>
      <Route path="/" element={<Formulario />}/>
      <Route path="/navegacao" element={<Navegacao />}/>
    </Routes>
  )
}