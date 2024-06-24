const cityInput=document.querySelector(".city-input");

const searchButton=document.querySelector(".search-btn");

const locationButton=document.querySelector(".location-btn");
const currentWeather=document.querySelector(".current-weather");

const weatherCardsDiv=document.querySelector(".weather-cards");

const API_KEY="cc25b84ece8f6362e66e7354d273c517"; // API key GEOCODING  openweathermap.org
const getWeatherDetails=(cityName,lat,lon)=>{
    const WEATHER_API_URL=`http://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(WEATHER_API_URL).then(res=>res.json()).then(data=>{
        console.log(data);
    }).catch(()=>{
        alert(`An error occurred while fetching the weather forecast!`)
    });
}


const getCityCoordinates = ()=>{
    const cityName=cityInput.value.trim();  // remove white spaces
    if(!cityName){
        return "Something is wrong"
    }

    // get the entry city coordinates (latitude and longitude and name) from the api response
    else{
        const GEOCODING_API_URL=`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
        fetch(GEOCODING_API_URL).then(res=>res.json()).then(data=>{
            if(!data.length) return alert(`No Coordinates found for ${cityName}`)
            const {name,lat,lon}=data[0];
            getWeatherDetails(name,lat,lon);
        }).catch(()=>{
            alert(`An error occurred while fetching coordinates!`)
        })
    }
}
searchButton.addEventListener("click", getCityCoordinates);