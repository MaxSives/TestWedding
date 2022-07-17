const kigdsan = document.querySelector("#kigdsan");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const deadline = new Date(`2026-12-31`);

function updateCounter() {
  const currentasdupog = new Date();
  const dist = deadline - currentasdupog;

  const toDays = Math.floor(dist / 1000 / 60 / 60 / 24);
  const toHours = Math.floor(dist / 1000 / 60 / 60) % 24;
  const toMinutes = Math.floor(dist / 1000 / 60) % 60;
  const toSeconds = Math.floor(dist / 1000) % 60;

  days.innerText = toDays;
  hours.innerText = toHours < 10 ? "0" + toHours : toHours;
  minutes.innerText = toMinutes < 10 ? "0" + toMinutes : toMinutes;
  seconds.innerText = toSeconds < 10 ? "0" + toSeconds : toSeconds;
}

updateCounter();

setInterval(updateCounter, 1000);
