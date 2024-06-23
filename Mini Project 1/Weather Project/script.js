const cityInput=document.querySelector(".city-input");

const searchButton=document.querySelector(".search-btn");

const locationButton=document.querySelector(".location-btn");
const currentWeather=document.querySelector(".current-weather");

const weatherCardsDiv=document.querySelector(".weather-cards");

const API_KEY="cc25b84ece8f6362e66e7354d273c517"; // API key GEOCODING  openweathermap.org

const getCityCoordinates = ()=>{
    const cityName=cityInput.value.trim();  // remove white spaces
    if(!cityName){
        return "Something is wrong"
    }
    else{
        const GEOCODING_API_URL=`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
        fetch(GEOCODING_API_URL).then(res=>res.json()).then(data=>{
            console.log(data);
        }).catch(()=>{
            alert(`An error occurred while fetching`)
        })
    }
}
searchButton.addEventListener("click", getCityCoordinates);