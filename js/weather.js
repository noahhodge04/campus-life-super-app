/* 
National Weather Service API call for the forecast area encompassing Winona Lake, IN
IWX is the code for the Northern Indiana weather station, and (44,45) is the NWS grid coordinate for the area of interest
The location is set because this app is particularly for Grace College
*/

const forecastContainer = document.querySelector('#forecast-container');

async function getWeather() {
    /* NWS API endpoint for Winona Lake, IN */
    const endpoint = "https://api.weather.gov/gridpoints/IWX/44,45/forecast";
    const response = await fetch(endpoint);
    const data = await response.json();
    const periods = data.properties.periods;

    /* Retrieves the page's designated div for the forecast boxes */
    const output = document.getElementById("forecast-container");

    /* For each period, adds the following block of HTML code for a single forecast box */
    for(let i=0; i < periods.length; i++) {
        output.innerHTML += `
            <div class="container-fluid mb-4">
                <img class="weather-icon" src="${periods[i].icon}">
                <div class="weather-content container">
                    <span class="period-name">${periods[i].name}</span><br>
                    <span class="temperature">${periods[i].temperature}°</span>
                    <span class="short-forecast">${periods[i].shortForecast}</span><br>
                    <span class="rain-chance">${periods[i].probabilityOfPrecipitation.value}% chance of precipitation
                </div>
            </div>
            <hr>
            `;
        }
}

getWeather();
