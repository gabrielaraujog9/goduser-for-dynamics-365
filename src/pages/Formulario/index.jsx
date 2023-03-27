import { Button } from "../../components/Button";
import { ColumnButton } from "../../components/ColumnButton";
import { Container } from "./styles";
import {Repositorio} from "../../scripts/Repositorio";


export function Formulario(){
  async function Modo_Deus(){
    var [tab] = await chrome.tabs.query({ currentWindow: true, active: true });
    new Repositorio.Mensagem(Repositorio.Categorias.Console,"God_Mode",Repositorio.Funcoes.God_Mode, tab).Enviar();
  }
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