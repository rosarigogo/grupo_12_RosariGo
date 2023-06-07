document.addEventListener("DOMContentLoaded", function() {
    var weatherInfo = document.getElementById("weatherInfo");
  
    // Configura los parámetros de la solicitud a la API de OpenWeatherMap
    var apiKey = "af9c1fc88d6c298ecb75488d057919cc";
    var city = "Rosario";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    // Realiza la solicitud a la API
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Maneja la respuesta de la API
        var temperature = data.main.temp;
        var description = data.weather[0].description;
  
        // Muestra la información del clima en el elemento weatherInfo
        weatherInfo.textContent = `Temperatura: ${temperature}°C, Descripción: ${description}`;
      })
      .catch(function(error) {
        // Maneja los errores de la solicitud
        weatherInfo.textContent = "Error al obtener la información del clima";
        console.log(error);
      });
  });