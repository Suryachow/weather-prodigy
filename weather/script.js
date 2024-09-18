document.addEventListener('DOMContentLoaded', () => {
    const inputVal = document.querySelector('#cityinput');
    const btn = document.querySelector('#submit');
    const city = document.querySelector('#cityoutput');
    const description = document.querySelector('#description');
    const temp = document.querySelector('#temp');
    const wind = document.querySelector('#wind');
    const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

    function convertTemp(val) {
        return (val - 273.15).toFixed(2);
    }

    btn.addEventListener('click', () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                const nameVal = data.name;
                const weatherDesc = data.weather[0].description;
                const temperature = data.main.temp;
                const windSpeed = data.wind.speed;

                city.innerHTML = `Weather of <span>${nameVal}</span>`;
                temp.innerHTML = `Temperature: <span>${convertTemp(temperature)} °C</span>`;
                description.innerHTML = `Sky Conditions: <span>${weatherDesc}</span>`;
                wind.innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
            })
            .catch(err => alert('You entered an incorrect city name'));
    });
});
