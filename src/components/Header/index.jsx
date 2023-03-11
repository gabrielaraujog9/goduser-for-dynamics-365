import { Container } from "./styles";
import { MdMenu, MdSearch, MdClose } from 'react-icons/md';
import "../../styles/style.css"
import { Menu } from "../Menu";
import { IconDiv } from "../IconDiv";
import { useState } from 'react';


export function Header(){
  const [display, setDisplay] = useState("none")
  const [classIconMenu, setClassIconMenu] = useState("iconShow")
  const [classIconClose, setClassIconClose] = useState("iconHidden")
  const openAndClose = () => {
    
    if(display === "none" && classIconClose === "iconHidden" && classIconMenu === "iconShow"){
      setDisplay("block");
      setClassIconMenu("iconHidden")
      setClassIconClose("iconShow")
    }
    if(display === "block" && classIconClose === "iconShow" && classIconMenu === "iconHidden"){
      setDisplay("none");
      setClassIconMenu("iconShow")
      setClassIconClose("iconHidden")
    }
  }
  return(
    <Container>
      <Menu display={display}/>
      <IconDiv onClick={openAndClose}><MdClose className={"iconMenu " + classIconClose}/><MdMenu className={"iconMenu " + classIconMenu}/></IconDiv>
      <IconDiv><MdSearch className="iconMenu"/></IconDiv>
    </Container>
  )
}