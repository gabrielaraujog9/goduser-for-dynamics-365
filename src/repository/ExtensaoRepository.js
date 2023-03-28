export class ExtensaoRepository{
  construct(Xrm){
    this.xrm = Xrm
  }
  static injetar(caminho){
    var scriptInjetavel = document.createElement("script");
    scriptInjetavel.id = "God_User_JS";
    scriptInjetavel.src = caminho;
    scriptInjetavel.onload= function(){
        this.remove();
    };
    (document.head || document.documentElement).appendChild(scriptInjetavel);
  }
}