const api = {
    key: "772a5938a64f5d0f8aa3e42401341db0",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box'); //get
searchbox.addEventListener('keypress', setQuery); //pass keypress

function setQuery(evt){
    if(evt.keyCode == 13) {
        // getResults(searchBox.value);
        console.log(searchbox.value)
    }
}