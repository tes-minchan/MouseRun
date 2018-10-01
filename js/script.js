const PIXELTOCM = 37.7952755906;

let prevX = 0;
let prevY = 0;
let timeout = null;

$(document).ready(function(){

  $("<div class=\"follower\"></div>").appendTo("body");
  console.log('insert');
});



$(document).mousemove(function(event) {

  clearTimeout(timeout);
  timeout = setTimeout(function() {
      chrome.runtime.sendMessage(chrome.runtime.id, {'run' : false});
  }, 500);
  
  const distanceX = Math.abs(prevX - event.pageX);
  const distanceY = Math.abs(prevY - event.pageY);
  const distance  = Math.sqrt( Math.pow(distanceX,2) + Math.pow(distanceY,2) ) / PIXELTOCM;

  chrome.runtime.sendMessage(chrome.runtime.id, {'distance' : distance});

  prevX = event.pageX;
  prevY = event.pageY;

  $('.follower').css({
    left: event.clientX,
    top: event.clientY,
  });

});



$(document).on("click", function(event) {

  
})
