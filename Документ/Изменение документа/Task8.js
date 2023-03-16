const buttonStart = document.querySelector('.start');
const buttonStop = document.querySelector('.stop');
let hours = document.querySelector('.clock__hours');
let minutes = document.querySelector('.clock__minutes');
let seconds = document.querySelector('.clock__seconds');
let intervalId;

buttonStart.addEventListener('click', () => {
  setTime();
  intervalId = setInterval(() => {
    setTime();
  }, 1000);
});

function setTime() {
  const date = new Date();

  hours.textContent = ('0' + date.getHours()).slice(-2);
  minutes.textContent = ('0' + date.getMinutes()).slice(-2);
  seconds.textContent = ('0' + date.getSeconds()).slice(-2);
}

buttonStop.addEventListener('click', () => {
  clearInterval(intervalId);
});
