var formContext;
window.addEventListener('message',function (event){
    formContext = event.source.Xrm?.Page;
    console.log(formContext);
}
);