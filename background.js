function colorIcon() {
  chrome.tabs.query(
    {currentWindow: true, active : true},
    function(tabs){
      chrome.pageAction.setIcon({
        path : {
          "19": "Shifter_Color_19.png",
          "38": "Shifter_Color_38.png"
        },
        tabId : tabs.shift().id
      });
    }
  )
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.isShifter) {
      console.log('Shifter!')
      colorIcon()
    }

    sendResponse()
  }
)
