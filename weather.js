// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d1845658f92b31c64bd94f06f7188c9c&units=metric
// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

let place = document.getElementById('place');
let weather = document.getElementById('weather');
let weatherImg = document.getElementById('weather-img');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');
let humid = document.getElementById('humid');
let cloud = document.getElementById('cloud');

async function showWeather(){
    let city = document.getElementById('city').value.toLowerCase();
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    
    place.textContent = `${data?.name}`;
    weather.textContent = `${data?.weather[0]?.main}`;

    await climate(weather.textContent);

    temp.textContent = `${data?.main?.temp} °C`;
    wind.textContent = `${data?.wind?.speed} m/s`;
    humid.textContent = `${data?.main?.humidity} %`;
    cloud.textContent = `${data?.clouds?.all} %`;
}

async function climate(value){
    if(value == 'Drizzle'){
        weatherImg.src = 'https://img.icons8.com/?size=100&id=15360&format=png&color=000000'
    }
    else if(value == 'Clouds'){
        weatherImg.src = 'https://img.icons8.com/?size=100&id=15359&format=png&color=000000';
    }
    else if(value == 'Mist'){
        weatherImg.src = 'https://img.icons8.com/?size=100&id=HMyR9EOwCWVD&format=png&color=228BE6';
    }
    else if(value == 'Clear'){
        weatherImg.src = 'https://img.icons8.com/?size=100&id=wwWkoh82H4QD&format=png&color=000000';
    }
    else if(value == 'Rain'){
        weatherImg.src = 'https://img.icons8.com/?size=100&id=64197&format=png&color=000000';
    }
    else{
        weatherImg.src = 'https://img.icons8.com/?size=100&id=63725&format=png&color=000000';
    }
}