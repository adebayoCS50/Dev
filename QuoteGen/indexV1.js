const hourElem = document.getElementById("hr");
const minuteElem = document.getElementById("min");
const secondElem = document.getElementById("second");
const ampmElem = document.getElementById("ampm");

function updateClock() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "AM";

  hourElem.innerText = hr;
  hr = hr < 10 ? "0" + hr : hr; //format the hour.

  minuteElem.innerText = min;
  min = min < 10 ? "0" + min : min; //format the hour.

  secondElem.innerText = sec;
  sec = sec < 10 ? "0" + sec : sec; //format the hour.

  ampmElem.innerText = ampm;
  if (hr > 12) {
    hr = h - 12;
    ampm = "PM";
  }

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
