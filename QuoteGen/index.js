// Get the elements that correspond to the clock display
const hourElem = document.getElementById("hr");
const minuteElem = document.getElementById("min");
const secondElem = document.getElementById("second");
const ampmElem = document.getElementById("ampm");

// Updates the clock display every second.
function updateClock() {
  // Get the current time
  const now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let ampm = "AM";

  // Determine whether it's AM or PM and update the ampm and hr variables
  if (hr >= 12) {
    ampm = "PM";
    hr -= 12;
  }

  // Format the time values
  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // Update the clock display
  hourElem.innerText = hr;
  minuteElem.innerText = min;
  secondElem.innerText = sec;
  ampmElem.innerText = ampm;

  // Schedule the next update in one second
  setTimeout(updateClock, 1000);
}

// Start the clock
updateClock();
