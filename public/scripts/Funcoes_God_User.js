var formContext;
window.addEventListener('message',async function (event){
    formContext = event.source.Xrm?.Page;
    if(formContext!= undefined){
      this.window.postMessage("Xrm","CRM");
    }
);