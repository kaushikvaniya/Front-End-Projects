let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timmer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime.innerHTML = hours + ": " + minutes + ": " + seconds;
}

function watchstart() {
  if (timmer != null) {
    clearInterval(timmer);
  }
  timmer = setInterval(stopwatch, 1000);
}
function watchstop() {
  clearInterval(timmer);
}
function watchreset() {
  clearInterval(timmer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
