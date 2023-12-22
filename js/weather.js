let weather = {
    apiKey: "9e9b3c7a8fa04c03b1d163103232012",
    fetchWeather: function(city){
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&aqi=no`)
        .then((response)=> response.json())
        .then((data) => this.showWeather(data));
    },
    showWeather: function(data) {
        const { name } = data.location;
        const { icon, text } = data.current.condition;
        const { temp_c, humidity } = data.current;
        const { wind_mph } = data.current;
        console.log(name,icon, text, temp_c, humidity, wind_mph);
        document.querySelector(".city").innerHTML= `El tiempo en: ${name}`;
        document.querySelector(".icon-temp").src=icon;
        document.querySelector(".description").innerHTML=text;
        document.querySelector(".temp").innerHTML=`Temperatura ${temp_c}°C`;
        document.querySelector(".humedad").innerHTML=`Humedad ${humidity} %`;
        document.querySelector(".wind").innerHTML=`Viento ${wind_mph} mph`;
       },
       search: function() {
        this.fetchWeather(document.querySelector("#search-bar").value)
       }
};
document.querySelector(".search-box button").addEventListener("click", function() {
    weather.search();
} );

document.addEventListener('DOMContentLoaded', () =>  {
    weather.fetchWeather('bogota');
});

document.getElementById("search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})