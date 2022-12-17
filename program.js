
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

//const API = 'https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key} & units=metric'

const getWeather = async(city) => {
    weather.innerHTML = `<h3>Loading Data...Please Wait!</h3>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
    weather.innerHTML = `<h6> Alert! City Not Found...Please Check It Again </h6>`
    return;
}   weather.innerHTML = `<div>
                              <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                        </div>
                        <div>  
                             <h1>${data.main.temp}  &#176C </h1>  <h4> ${data.weather[0].main} </h4> 
                        </div>`
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)