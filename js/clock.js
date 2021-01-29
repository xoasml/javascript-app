const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const minutes = timeFommater(date.getMinutes());
  const hours = timeFommater(date.getHours());
  const seconds = timeFommater(date.getSeconds());
  clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
  // 3항 연산자로 만드는 법.
  //   `${hours < 10 ? `0${hours}` : hours} :
  //   ${minutes < 10 ? `0${minutes}` : minutes} :
  //   ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function timeFommater(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
