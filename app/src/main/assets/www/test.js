var lastCalledTime;
var fps;
const FPS = 20;


function requestAnimFrame() {

  if(!lastCalledTime) {
     lastCalledTime = performance.now();
     fps = 0;
     return;
  }
  delta = (performance.now() - lastCalledTime)/1000;
  lastCalledTime = performance.now();
  fps = 1/delta;
}

var i=0;
function processVideo() {

    //Get/create video element from Java application and process it. EASY as fuck
    document.getElementById("grabbingTest").innerHTML = i;

    requestAnimFrame()

    i = i+1
	setTimeout(processVideo, fps);
}
// schedule the first one.
setTimeout(processVideo, 0);
