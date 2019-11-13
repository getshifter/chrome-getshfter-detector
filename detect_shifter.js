if (document.childNodes.length === 3) {
  chrome.runtime.sendMessage(
    {isShifter: document.lastChild.textContent.includes("created by Shifter Generator")
  }, function(response) {})
} else {
  chrome.runtime.sendMessage(
    {isShifter: document.documentElement.outerHTML.includes("created by Shifter Generator")
  }, function(response) {})
}

