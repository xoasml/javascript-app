const weather = document.querySelector(".js-weather");

const API_KEY = "8edca8d726a0e5847226ed412605b8b4";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const plaece = json.name;
      const nature = json.weather[0].main;
      weather.innerText = `${temperature} ${plaece} ${nature}`;
      console.log(json);
    });
}

function handleGeoError() {
  console.log("Cant access geo location ");
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    //   latitude: latitude,
    //   longitude: longitude,
    latitude,
    longitude,
  };
  getWeather(latitude, longitude);
  saveCoords(coordsObj);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
