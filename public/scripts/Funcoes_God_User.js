/* eslint-disable no-undef */
window.addEventListener('message',async function (mensagem, sender, sendResponse){
    try{
        var event = mensagem.data;
        if(event?.hasOwnProperty("Mensagem_God_User") && event?.Mensagem_God_User){
            if(mensagem.origin !== this.location.origin && this.location.origin !== `${mensagem.origin}.mcas.ms`) return;
            let formContext = mensagem.source.Xrm?.Page;
            let xrm = mensagem.source.Xrm;
            let form = new FormularioRepository();
            switch(event.Funcao){
                case form.Funcoes.AbrirRegistro:
                    console.log(form.Funcoes.Texto(form.Funcoes.AbrirRegistro));
                    console.log(formContext);
                    break;
                case form.Funcoes.CamposAtualizados:
                    console.log(form.Funcoes.Texto(form.Funcoes.CamposAtualizados));
                    break;
                case form.Funcoes.God_Mode:
                    console.log(form.Funcoes.Texto(form.Funcoes.God_Mode));
                    console.log(formContext);
                    break;
                case form.Funcoes.LimparNomesLogicos:
                    console.log(form.Funcoes.Texto(form.Funcoes.LimparNomesLogicos));
                    break;
                case form.Funcoes.NomesLogicos:
                    console.log(form.Funcoes.Texto(form.Funcoes.NomesLogicos));
                    break;
                case form.Funcoes.UrlRegistro:
                    console.log(form.Funcoes.Texto(form.Funcoes.UrlRegistro));
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

// const Categorias = {
//     Texto: function(value) {
//         return Object.keys(this).find(key => this[key] === value);
//     },
//     "Form":0,
//     "WebApi":1,
//     "Localizacao":2,
//     "Console":3
// };

// const Funcoes ={
//     Texto: function(value) {
//         return Object.keys(this).find(key => this[key] === value);
//     },
//     "God_Mode":0,
//     "WorkFlows":1,
//     "NomesLogicos":2,
//     "LimparNomesLogicos":3,
//     "AbrirRegistro":4,
//     "UrlRegistro":5,
//     "CamposAtualizados":6
// };