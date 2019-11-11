function colorIcon() {
  chrome.browserAction.setIcon({
    path : {
      "19": "Shifter_Color_19.png",
      "38": "Shifter_Color_38.png"
    }
  });
}

function monoIcon() {
  chrome.browserAction.setIcon({
    path : {
      "19": "Shifter_Mono_19.png",
      "38": "Shifter_Mono_38.png"
    }
  });
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.isShifter) {
      console.log('Shifter!')
      colorIcon()
    } else {
      monoIcon()
    }
  sendResponse()
  }
)
