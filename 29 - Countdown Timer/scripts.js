let countdown;

const timeButtons = document.querySelectorAll("[data-time]");
const timeLeft = document.querySelector(".display__time-left");
const timeStop = document.querySelector(".display__end-time");

function timer(seconds) {
	const startTime = Date.now();
  const endTime = startTime + seconds * 1000;
  

	clearInterval(countdown);
	showTimer(seconds, endTime);

	countdown = setInterval(() => {
		const secondsRemaining = Math.round((endTime - Date.now()) / 1000);

		if (secondsRemaining < 0) {
			clearInterval(countdown);
			return;
		} else {
			showTimer(secondsRemaining, endTime);
		}
	}, 1000);
}

function showTimer(sec, endTime) {
	const time = new Date(endTime);

	let remainingSeconds = sec;

	let hours = Math.floor(remainingSeconds / 3600);
	remainingSeconds %= 3600;
	let minutes = Math.floor(remainingSeconds / 60)
		.toString()
		.padStart(2, "0");
	remainingSeconds %= 60;
	let seconds = Math.floor(remainingSeconds).toString().padStart(2, "0");

	timeLeft.textContent = `${hours > 0 ? hours.toString() + ":" : ""}${minutes > 0 || hours > 0 ? minutes + ":" : ""}${seconds}`;
	timeStop.textContent = `Timer stops at: ${time.getHours()}:${time.getMinutes().toString().padStart(2, "0")}:${time.getSeconds().toString().padStart(2, "0")}`;

	document.title = timeLeft.textContent;
}

function addTime() {
	let seconds = parseInt(this.dataset.time);
	timer(seconds);
}

timeButtons.forEach((btn) => {
	btn.addEventListener("click", addTime);
});

document.customForm.addEventListener("submit", function (e) {
	e.preventDefault();

	timer(this.minutes.value * 60);
	this.reset();
});
