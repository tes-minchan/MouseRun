

chrome.storage.local.get(function(data) {
  const userRun = Math.round(data.userMouseRun);
  

  document.querySelector('#mouseMoveData').innerText = userRun/100 + " m ";


});

chrome.runtime.onMessage.addListener(function(request, sender, callback) {

  if(request.distance) {
    document.querySelector('#trex').style.WebkitAnimationPlayState = "running";

    chrome.storage.local.get(function(data) {
      const userRun = Math.round(data.userMouseRun + request.distance);
  
      document.querySelector('#mouseMoveData').innerText = (userRun)/100 + " m ";
  
    });
  }
  else if(!request.run) {
    document.querySelector('#trex').style.WebkitAnimationPlayState = "paused";
  }
});


