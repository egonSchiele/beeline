chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
      code: 'Beeline.show()'
  });    
});
