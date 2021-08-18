function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${minutes}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
}








function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature")
    temperatureElement.innerHTML = response.data.main.temp
    
}

let apiKey = "d158e814af56482efd1df2f3283070e5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);