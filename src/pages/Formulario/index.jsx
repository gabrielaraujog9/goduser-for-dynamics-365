import { Button } from "../../components/Button";
import { ColumnButton } from "../../components/ColumnButton";
import { Container } from "./styles";

function Modo_Deus2(){
  chrome.runtime.sendMessage("Hello World");
}

export function Formulario(){
  function Modo_Deus(){
    chrome.runtime.sendMessage("Hello World");
  }
  return(
    <Container>
      <ColumnButton>
        <Button onClick={Modo_Deus}>MODO DEUS</Button>
        <Button onClick={Modo_Deus2}>NOMES LÓGICOS</Button>
      </ColumnButton>
      <ColumnButton>
        <Button>LIMPAR NOMES LÓGICOS</Button>
        <Button>ABRIR REGISTROS NA WEB API</Button>
      </ColumnButton>
    </Container>
  )
}