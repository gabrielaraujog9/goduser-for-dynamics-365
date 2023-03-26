export const Repositorio = {
    Mensagem: class{
        constructor(categoria, mensagem="", funcao, tab){
        this.Categoria = categoria;
        this.Mensagem = mensagem;
        this.Funcao = funcao;
        this.Tab = tab;
        };
        Enviar = () => chrome.runtime.sendMessage(this);
    },

    Categorias: {
        "Form":0,
        "WebApi":1,
        "Localizacao":2,
        "Console":3
    },

    Funcoes: {
        "God_Mode":0,
        "WorkFlows":1,
        "NomesLogicos":2,
        "LimparNomesLogicos":3,
        "AbrirRegistro":4,
        "UrlRegistro":5,
        "CamposAtualizados":6
    }
}
