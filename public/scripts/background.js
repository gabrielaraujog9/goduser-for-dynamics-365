chrome.runtime.onMessage.addListener(async function(message,sender,sendResponse ){
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //if (!tab) return;
<<<<<<< HEAD
=======
  // chrome.tabs.sendMessage(tab?.id ?? message.Tab.id, message).then((resposta)=>console.log(resposta));
>>>>>>> 04f3a86a5e3b0e79c8d353c43aafbae88913fd7b
  chrome.scripting.executeScript({
    target: { tabId: tab?.id ?? message.Tab.id },
    func: Envio,
    args: [JSON.stringify(message)]
  });

  
});

function Envio(message){
  window.postMessage(JSON.parse(message), '*')
}