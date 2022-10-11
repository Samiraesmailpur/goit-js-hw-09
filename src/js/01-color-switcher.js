import '../css/common.css';

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

let INTERVAL_DELAY = 1000;
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnStartClick() {
  intervalId = setInterval(
    () => (body.style.backgroundColor = getRandomHexColor()),
    INTERVAL_DELAY
  );
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function onBtnStopClick() {
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}
