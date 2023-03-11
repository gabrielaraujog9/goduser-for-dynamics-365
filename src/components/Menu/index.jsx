
import { Container, Ul, Li } from "./styles";

export function Menu(props){
  
  return(
    <Container display={props.display}>
      <Ul>
        <Li>Formulário</Li>
        <Li>Navegação</Li>
        <Li>PowerApps</Li>
        <Li>Fluxos</Li>
        <Li>Registros</Li>
        <Li>Impersonar</Li>
      </Ul>
    </Container>     
  )
}