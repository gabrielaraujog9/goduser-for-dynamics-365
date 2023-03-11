import { Container, IconDiv } from "./styles";
import { MdMenu, MdSearch } from 'react-icons/md';
import "./style.css"

export function Header(){
  return(
    <Container>
      <IconDiv><MdMenu className="iconMenu"/></IconDiv>
      <IconDiv><MdSearch className="iconMenu"/></IconDiv>
    </Container>
  )
}