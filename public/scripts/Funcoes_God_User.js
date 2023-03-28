import {FormularioRepository} from "../../src/repository/FormularioRepository";
window.addEventListener('message',async function(mensagem, sender, sendResponse){
    try{
        var event = mensagem.data;
        if(event?.hasOwnProperty("Mensagem_God_User") && event?.Mensagem_God_User){
            if(mensagem.origin !== this.location.origin && this.location.origin !== `${mensagem.origin}.mcas.ms`) return;
            let formContext = mensagem.source.Xrm?.Page;
            let xrm = mensagem.source.Xrm;
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