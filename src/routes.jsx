import {Routes, Route} from "react-router-dom";

import {Formulario} from "./pages/Formulario"

export function RoutesComponent(){
  return(
    <Routes>
      <Route path="/" element={<Formulario />}/>
    </Routes>
  )
}