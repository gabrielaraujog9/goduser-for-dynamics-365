import { ExtensaoRepository } from "../../src/repository/ExtensaoRepository";

class App{
  static start(){
    InjecaoRepository.injetar(chrome.runtime.getURL("scripts/Funcoes_God_User.js"))
  }
}
new App.start();
// chrome.runtime.sendMessage({ message: "popup" }, function (response) {
    
// });