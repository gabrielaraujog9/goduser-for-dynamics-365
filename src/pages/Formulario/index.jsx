import { Button } from "../../components/Button";
import { ColumnButton } from "../../components/ColumnButton";
import { Container } from "./styles";

function Modo_Deus(){
  console.log(window.Xrm);
}

export function Formulario(){
  return(
    <Container>
      <ColumnButton>
        <Button onClick={Modo_Deus}>MODO DEUS</Button>
        <Button>NOMES LÓGICOS</Button>
      </ColumnButton>
      <ColumnButton>
        <Button>LIMPAR NOMES LÓGICOS</Button>
        <Button>ABRIR REGISTROS NA WEB API</Button>
      </ColumnButton>
    </Container>
  )
}