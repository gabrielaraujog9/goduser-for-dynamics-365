chrome.runtime.onMessage.addListener(async function(message,sender,sendResponse ){
  console.log(message)
  const currentTab = chrome.windows.getCurrent();
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //if (!tab) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: teste,
    args: [message.toString()] 
  });

  
});
function teste(message){
  window.postMessage(message, '*')
}