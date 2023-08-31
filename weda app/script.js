const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key

const getWeatherButton = document.getElementById('getWeather');
getWeatherButton.addEventListener('click', getWeather);

async function getWeather() {
  const cityInput = document.getElementById('city');
  const city = cityInput.value;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
