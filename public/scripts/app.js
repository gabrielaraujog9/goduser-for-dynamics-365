var scriptInjetavel = document.createElement("script");
scriptInjetavel.type = "module";
scriptInjetavel.id = "God_User_JS";
scriptInjetavel.src = chrome.runtime.getURL("scripts/Funcoes_God_User.js");
scriptInjetavel.onload= function(){
    this.remove();
};
(document.head || document.documentElement).appendChild(scriptInjetavel);