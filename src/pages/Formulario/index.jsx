import { Button } from "../../components/Button";
import { ColumnButton } from "../../components/ColumnButton";
import { Container } from "./styles";


export function Formulario(){
  function Modo_Deus(){
    chrome.runtime.sendMessage("Hello World");
  }
  return(
    <Container>
      <ColumnButton>
        <Button onClick={Modo_Deus}>MODO DEUS3</Button>
        <Button>NOMES LÓGICOS</Button>
      </ColumnButton>
      <ColumnButton>
        <Button>LIMPAR NOMES LÓGICOS</Button>
        <Button>ABRIR REGISTROS NA WEB API</Button>
      </ColumnButton>
    </Container>
  )
}