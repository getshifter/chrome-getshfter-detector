chrome.runtime.sendMessage(
  {isShifter: document.documentElement.outerHTML.includes("created by Shifter Generator")
}, function(response) {})
