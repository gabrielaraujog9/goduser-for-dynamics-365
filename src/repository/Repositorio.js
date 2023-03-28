export const Repositorio = {
    Mensagem: class{
        constructor(categoria, mensagem="", funcao, tab){
            this.Mensagem_God_User = true; //Pra validar se foi a extensão que enviou a mensagem
            this.Categoria = categoria;
            this.Mensagem = mensagem;
            this.Funcao = funcao;
            this.Tab = tab;
        };
        Enviar = () => chrome.runtime.sendMessage(this);
    },
    getKeyByValue: function(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      },
    Categorias: {
        Texto: function(value) {
            return Object.keys(this).find(key => this[key] === value);
        },
        "Form":0,
        "WebApi":1,
        "Localizacao":2,
        "Console":3
    },

    Funcoes: {
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
    }
}
