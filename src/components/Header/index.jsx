import { Container, Menu } from "./styles";
import { MdMenu, MdSearch, MdClose } from 'react-icons/md';
import "../../styles/style.css"
import { IconDiv } from "../IconDiv";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export function Header(){
  const [open, setOpen] = useState(false)
  const [classIconMenu, setClassIconMenu] = useState("iconShow")
  const [classIconClose, setClassIconClose] = useState("iconHidden")
  const openAndClose = () => {
    
    if(!open){
      setOpen(true);
      setClassIconMenu("iconHidden")
      setClassIconClose("iconShow")
    }
    if(open){
      setOpen(false);
      setClassIconMenu("iconShow")
      setClassIconClose("iconHidden")
    }
    
  }

  const navigate = useNavigate()

  function handleFormulario(){
    navigate("/")
    openAndClose()
  }
  function handleNavegacao(){
    navigate("/navegacao")
    openAndClose()
  }
  return(
    <Container>
      <Menu open={open}>
        <ul>
          <li onClick={handleFormulario}>Formulário</li>
          <li onClick={handleNavegacao}>Navegação</li>
          <li>PowerApps</li>
          <li>Fluxos</li>
          <li>Registros</li>
          <li>Impersonar</li>
        </ul>
      </Menu> 
      <IconDiv onClick={openAndClose}><MdClose className={"iconMenu " + classIconClose}/><MdMenu className={"iconMenu " + classIconMenu}/></IconDiv>
      <IconDiv><MdSearch className="iconMenu"/></IconDiv>
    </Container>
  )
}