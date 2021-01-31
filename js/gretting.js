const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  replyBtn = document.querySelector(".greetings__reply");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function handleGrettingClick() {
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  replyBtn.classList.remove(SHOWING_CN);
  localStorage.removeItem(USER_LS);
  input.value = "";
  loadName();
}

replyBtn.addEventListener("click", handleGrettingClick);

function saveName(name) {
  localStorage.setItem(USER_LS, name);
}

function handleGrettingSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleGrettingSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  replyBtn.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
