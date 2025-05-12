const inputCityEl = document.getElementById('city');
const searchEl = document.querySelector('.search-cont');
const mainEl = document.querySelector('.main');

const weatherImageEl = document.getElementById('weather-image');
const temperatureEl = document.getElementById('temperature');
const locationEl = document.getElementById('location');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');

searchEl.addEventListener('click', () => {
    const city = inputCityEl.value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

        fetchWeatherData(city);
});

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await response.json();

        const weather = data.current_condition[0];
        const tempC = weather.temp_C;
        const humidity = weather.humidity;
        const windSpeed = weather.windspeedKmph;
        const weatherDesc = weather.weatherDesc[0].value;

        // Update UI
        temperatureEl.textContent = `${tempC}°C`;
        humidityEl.innerHTML = `${humidity}% <br> Humidity`;
        windSpeedEl.innerHTML = `${windSpeed} km/h <br> Wind Speed`;
        locationEl.textContent = city;

        // Set weather image based on description
        const desc = weatherDesc.toLowerCase();
        if(weatherDesc.includes("sun") || weatherDesc.includes("clear")) {
            weatherImageEl.src = 'images/clear.png';
        } else if (weatherDesc.includes("cloud")) {
            weatherImageEl.src = 'images/clouds.png';
        } else if (weatherDesc.includes("rain") || weatherDesc.includes("shower")) {
            weatherImageEl.src = 'images/rain.png';
        } else if (weatherDesc.includes("drizzle")) {
            weatherImageEl.src = 'images/drizzle.png';
        } else if (weatherDesc.includes("snow")) {
            weatherImageEl.src = 'images/snow.png';
        } else if (weatherDesc.includes("mist") || weatherDesc.includes("fog")) {
            weatherImageEl.src = 'images/mist.png';
        } else {
            weatherImageEl.src = 'images/clear.png'; // fallback
        }
        mainEl.classList.remove('hide');
    } catch (error) {
        alert("Failed to fetch weather data.");
        console.error(error);
    }
}
