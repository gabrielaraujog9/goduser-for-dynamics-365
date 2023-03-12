import { Button } from "../../components/Button";
import { ColumnButton } from "../../components/ColumnButton";
import { Container } from "./styles";

export function Formulario(){
  return(
    <Container>
      <ColumnButton>
        <Button>MODO DEUS</Button>
        <Button>NOMES LÓGICOS</Button>
      </ColumnButton>
      <ColumnButton>
        <Button>LIMPAR NOMES LÓGICOS</Button>
        <Button>ABRIR REGISTROS NA WEB API</Button>
      </ColumnButton>
    </Container>
  )
}