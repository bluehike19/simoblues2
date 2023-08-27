const apiKey = "3e3adbc59097e73d4940dc45808c8ec6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=nairobi";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=&{apiKey}`);
  var data = await response.json();
  console.log(data);
}

checkWeather();
