
let userMouseRunSum = 0;

chrome.storage.local.get(['userMouseRun'], function(result) {

  console.log("Background Start, data : " + result.userMouseRun);

  if(result.userMouseRun) {
    userMouseRunSum = result.userMouseRun;
  }

});



chrome.runtime.onMessage.addListener(function(request, sender, callback) {

  if(request.distance) {
    userMouseRunSum += request.distance;
    chrome.storage.local.set({"userMouseRun": userMouseRunSum});

  }
  else {

  }

});
