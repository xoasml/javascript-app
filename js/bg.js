const body = document.querySelector("body");

const IMG_NUMBER = 10;

function paintImg(imgNum) {
  const image = new Image();
  image.src = `img/${imgNum}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandNum() {
  const number = parseInt(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  const randNum = getRandNum();
  paintImg(randNum);
}
init();
