/* 
National Weather Service API call for the forecast area encompassing Winona Lake, IN
IWX is the code for the Northern Indiana weather station, and (44,45) is the NWS grid coordinate for the area of interest
The location is set because this app is particularly for Grace College
*/
const request = "https://api.weather.gov/gridpoints/IWX/44,45/forecast";