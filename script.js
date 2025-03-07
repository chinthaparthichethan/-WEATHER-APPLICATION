const API_KEY = "6b8d4426af40c2e9d81940541ddb9710"; // Replace with your actual API key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        if (data.success === false) {
            throw new Error(data.error.info);
        }

        document.getElementById("location").innerText = `${data.location.name}, ${data.location.country}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.current.temperature}°C`;
        document.getElementById("description").innerText = data.current.weather_descriptions[0];
        document.getElementById("weather-icon").src = data.current.weather_icons[0];
    } catch (error) {
        alert(error.message);
    }
}
