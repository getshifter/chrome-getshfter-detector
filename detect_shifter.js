if (document.lastChild.data) {
  chrome.runtime.sendMessage(
    {isShifter: document.lastChild.data.includes("created by Shifter Generator")
  }, function(response) {})
} else {
  chrome.runtime.sendMessage(
    {isShifter: document.documentElement.outerHTML.includes("created by Shifter Generator")
  }, function(response) {})
}

