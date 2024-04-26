'use strict';

(function () {
    window.addEventListener('load', init);
    /**
     * initiates page upon load
     */
    getLocation();
    let addButtons = document.querySelectorAll('.add');
    let subButtons = document.querySelectorAll('.sub');
    let delButtons = document.querySelectorAll('.del');
    function init() {
        document.getElementById("menu-icon-button").addEventListener('click', toggleAllMenu);
        //document.getElementById("term").addEventListener('keypress', searching);
        //document.getElementById("change-signup").addEventListener('click', changeToSignUp);
        //document.getElementById("change-login").addEventListener('click', changeToLogin);
        /*addButtons.forEach(addButton => {
            addButton.addEventListener('click', () => {
                
            });
        });*/
    }

    let lat = 0;
    let lon = 0;
    const apiKey = 'c63c7b1f85d2206a50019a1ae562bdfe';

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
            " Longitude: " + position.coords.longitude);
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        /*let weatherDiv = document.getElementById('weather-api');
        let pic = document.createElement('img');
        pic.src = 'https://openweathermap.org/img/wn/01d@2x.png';
        console.log(pic.src);
        weatherDiv.appendChild(pic);*/

        //!!!!!!!!ADD BACK!!!!!!!!!!!!
        weatherFetch();
    }


    function weatherFetch() {
        let weatherInfo = {
            weatherMain: "",
            weatherIcon: "",
            watchStyle: ""
        };
        let weatherDiv = document.getElementById('weather-api');
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
            .then(checkStatus)
            .then((weatherData) => {
                console.log(weatherData);
                let weatherOverview = weatherData['weather'];
                console.log("Weather Overview: " + weatherOverview);
                weatherInfo.weatherMain = weatherOverview[0].main;
                console.log("weatherOverview['main']: " + weatherOverview[0].main);
                console.log("weatherInfo.weatherMain: " + weatherInfo.weatherMain);
                weatherInfo.weatherIcon = weatherOverview[0].icon;
                console.log("weatherOverview['icon']: " + weatherOverview[0].icon);
                console.log("weatherInfo.weatherIcon" + weatherInfo.weatherIcon)
            })
            .then(() => {
                if (weatherInfo.weatherMain === "Clear") {
                    weatherInfo.watchStyle = "ALL STYLES";
                } else if (weatherInfo.weatherMain === "Thunderstorm") {
                    weatherInfo.watchStyle = "Diver";
                } else if (weatherInfo.weatherMain === "Drizzle") {
                    weatherInfo.watchStyle = "Chronograph";
                } else if (weatherInfo.weatherMain === "Rain") {
                    weatherInfo.watchStyle = "Diver";
                } else if (weatherInfo.weatherMain === "Snow") {
                    weatherInfo.watchStyle = "Field & Pilot";
                } else if (weatherInfo.weatherMain === "Atmosphere") {
                    weatherInfo.watchStyle = "Field & Pilot";
                } else if (weatherInfo.weatherMain === "Clouds") {
                    weatherInfo.watchStyle = "GMT";
                } else {
                    console.log("Something is wrong in the API")
                }
        
                console.log("Left the fetch");
                console.log(weatherInfo);
                let line = document.createElement('div');
                line.classList.add("in-a-line");
        
                let pic = document.createElement('img');
                pic.src = `https://openweathermap.org/img/wn/${weatherInfo.weatherIcon}@2x.png`;
                console.log(pic.src);
                line.appendChild(pic);
        
                let weatherTitle = document.createElement('h5');
                weatherTitle.innerHTML = weatherInfo.weatherMain;
                line.appendChild(weatherTitle);
        
                let a = document.createElement('a');
                let linkText = "";
                if (weatherInfo.watchStyle !== "ALL STYLES") {
                    linkText = document.createTextNode(`Perfect for ${weatherInfo.watchStyle} Watches`);
                } else if (weatherInfo.watchStyle === "Chronograph") {
                    linkText = document.createTextNode(`Perfect for ${weatherInfo.watchStyle}s`);
                } else {
                    linkText = document.createTextNode(`Perfect for ${weatherInfo.watchStyle}`);
                }
                a.appendChild(linkText);
                a.title = `${weatherInfo.watchStyle}`;
                let lowercase = weatherInfo.watchStyle.toLowerCase();
                if (weatherInfo.watchStyle !== "ALL STYLES") {
                    a.href = `http://localhost:8000/watch/style/${lowercase}`;
                } else {
                    a.href = `http://localhost:8000/watch/style`;
                }
                line.appendChild(a);
        
                weatherDiv.appendChild(line);
            })
            .catch((error) => {
                console.error('Error: ', error);
            });

        
    }
    let smallScreenHidden = true;

    function removeFirstLetter(word) {
        let id = word.substring(2);
    }

    function toggleAllMenu(event) {
        document.getElementById("small-screen").classList.toggle('no-show');
    }


    function changeToLogin() {
        document.getElementById('login-container').classList.remove('hide')
        document.getElementById('signup-container').classList.add('hide');
    }

    function changeToSignUp() {
        document.getElementById('login-container').classList.add('hide')
        document.getElementById('signup-container').classList.remove('hide');
    }


    /*function searching(event) {
        /*let term = event.currentTarget.value;
        console.log(term);
        if (event.key === 'Enter' && term !== null) {
            fetch(`http://localhost:8000/search/term/${term}`)
            .then(response => response.json())
            .then(term => )
            .catch(alert("It is not working"))
        }
        let term = event.currentTarget.value;
        console.log(term);
        if (event.key === 'Enter' && term !== null) {
            window.location.replace(`https://www.google.com/`);
            //location.reload();
        }
    }*/

    function checkStatus(response) {
        if (!response.ok) {
            throw Error("Error in request: " + response.statusText);
        }
        return response.json();
    }
})();
