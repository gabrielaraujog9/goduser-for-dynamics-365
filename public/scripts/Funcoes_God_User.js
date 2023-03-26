window.addEventListener('message',async function (event){
    try{
        if(event?.data?.hasOwnProperty("Extensao") && event?.data?.Mensagem_God_User){
            console.group("extensão");
            console.log(event);
            console.groupEnd();
        }
    }
    catch(erro){
        console.error(erro);
    }
  }
);

const Categorias = {
    "Form":0,
    "WebApi":1,
    "Localizacao":2,
    "Console":3
};

const Funcoes ={
    "God_Mode":0,
    "WorkFlows":1,
    "NomesLogicos":2,
    "LimparNomesLogicos":3,
    "AbrirRegistro":4,
    "UrlRegistro":5,
    "CamposAtualizados":6
};