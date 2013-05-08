// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
 

  chrome.tabs.executeScript(null,
                           {code:"alert('ran injceted Script')"});
  alert("Executed Script");

});