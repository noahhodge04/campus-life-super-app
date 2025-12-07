/* 
National Weather Service API call for the forecast area encompassing Winona Lake, IN
IWX is the code for the Northern Indiana weather station, and (44,45) is the NWS grid coordinate for the area of interest
The location is set because this app is particularly for Grace College
*/

const forecastContainer = document.querySelector('#forecast-container');

async function getWeather() {
    const endpoint = "https://api.weather.gov/gridpoints/IWX/44,45/forecast";
    const response = await fetch(endpoint);
    const data = await response.json();
    const periods = data.properties.periods;

    const output = document.getElementById("forecast-container");
    output.innerHTML += `
        <div class="container-fluid mb-4">
            <img class="weather-icon" src="${periods[0].icon}">
            <div class="weather-content container">
                <span class="period-name">${periods[0].name}</span><br>
                <span class="temperature">${periods[0].temperature}°</span>
                <span class="short-forecast">${periods[0].shortForecast}</span><br>
                <span class="rain-chance">${periods[0].probabilityOfPrecipitation.value}% chance of precipitation
            </div>
        </div>
        <hr>
        `;
}

getWeather();
