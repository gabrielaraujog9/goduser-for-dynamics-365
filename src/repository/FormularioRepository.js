export class FormularioRepository{
  teste(){
    console.log("Teste")
  };
  Categorias = {
    Texto: function(value) {
        return Object.keys(this).find(key => this[key] === value);
    },
    "Form":0,
    "WebApi":1,
    "Localizacao":2,
    "Console":3
  };

  Funcoes ={
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
}