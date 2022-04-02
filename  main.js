const api = {
    key: "772a5938a64f5d0f8aa3e42401341db0",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box'); //get
searchbox.addEventListener('keypress', setQuery); //pass keypress

function setQuery(evt){
    if(evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value)
    }
}

function getResults (query){
    fetch(`{api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json().data;
    }).then(displayResults)
}

function displayResults (weather){
    console.log(weather)
}