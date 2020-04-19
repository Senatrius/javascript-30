const secHand = document.querySelector('.hand--second');
const minHand = document.querySelector('.hand--minute');
const hrHand = document.querySelector('.hand--hour');

// Get the seconds, minutes and hours to use in other functions
const now = () => {
  const currentTime = new Date();

  return {
    sec: currentTime.getSeconds(),
    min: currentTime.getMinutes(),
    hr: currentTime.getHours()
  }
}

//Turn results from now() into degrees and the turn the clock hands
const turnClock = (sec, min, hr) => {
  let secDegrees = (sec / 60) * 360 - 90;
  let minDegrees = (min / 60) * 360 - 90;
  let hrDegrees = (hr / 12) * 360 - 90;

  secHand.style.transform = `rotate(${secDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hrHand.style.transform = `rotate(${hrDegrees}deg)`;
}

setInterval(() => {
  turnClock(now().sec, now().min, now().hr)
}, 1000);

//Call the function so the clock appears correct as soon as it loads and doesn't wait for setInterval
turnClock(now().sec, now().min, now().hr);