import {FormularioRepository} from "../../src/repository/FormularioRepository";
// window.addEventListener('message',async function (event){
//     try{
//         if(event?.data?.hasOwnProperty("Mensagem_God_User") && event?.data?.Mensagem_God_User){
//             console.group("extensão");
//             console.log(event);
//             console.groupEnd();
//         }
//     }
//     catch(erro){
//         console.error(erro);
//     }
//   }
// );
window.addEventListener('message',async function(mensagem, sender, sendResponse){
/*chrome.runtime.onMessage.addListener(async function*/
    try{
        console.group("extensão");
        var event = mensagem.data;
        if(event?.hasOwnProperty("Mensagem_God_User") && event?.Mensagem_God_User){
            console.log(event);
            let formContext = mensagem.source.Xrm?.Page;
            switch(event.Funcao){
                case Funcoes.AbrirRegistro:
                    console.log(Funcoes.Texto(Funcoes.AbrirRegistro));
                    console.log(formContext);
                    break;
                case Funcoes.CamposAtualizados:
                    console.log(Funcoes.Texto(Funcoes.CamposAtualizados));
                    break;
                case Funcoes.God_Mode:
                    console.log(Funcoes.Texto(Funcoes.God_Mode));
                    console.log(formContext);
                    break;
                case Funcoes.LimparNomesLogicos:
                    console.log(Funcoes.Texto(Funcoes.LimparNomesLogicos));
                    break;
                case Funcoes.NomesLogicos:
                    console.log(Funcoes.Texto(Funcoes.NomesLogicos));
                    break;
                case Funcoes.UrlRegistro:
                    console.log(Funcoes.Texto(Funcoes.UrlRegistro));
                    break;
                default:
                break;
            }
        }
        console.groupEnd();
    }
    catch(erro){
        console.error(erro);
    }
});

const Categorias = {
    Texto: function(value) {
        return Object.keys(this).find(key => this[key] === value);
    },
    "Form":0,
    "WebApi":1,
    "Localizacao":2,
    "Console":3
};

const Funcoes ={
    Texto: function(value) {
        return Object.keys(this).find(key => this[key] === value);
    },
    "God_Mode":0,
    "WorkFlows":1,
    "NomesLogicos":2,
    "LimparNomesLogicos":3,
    "AbrirRegistro":4,
    "UrlRegistro":5,
    "CamposAtualizados":6
};