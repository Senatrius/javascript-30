const compass = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
  speed.textContent = data.coords.speed;

  compass.style.transform = `rotate(${data.coords.heading}deg)`;
}, err => {
  console.log(err);
});