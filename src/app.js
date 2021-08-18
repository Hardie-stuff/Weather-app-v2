function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature")
    temperatureElement.innerHTML = response.data.main.temp
    
}

let apiKey = "d158e814af56482efd1df2f3283070e5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);