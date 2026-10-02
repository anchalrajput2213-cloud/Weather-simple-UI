let city = document.getElementById("city");
let button = document.getElementById("btn");
button.addEventListener("click", function () {
    let cityName = city.value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=cbea8be86625e4f90f67ab796d471f6f&units=metric")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temperature").innerText = data.main.temp + " °C";
            document.getElementById("humidity").innerText = data.main.humidity + " %";
            document.getElementById("wind").innerText = data.wind.speed + " m/s";
        })
        .catch(function (error) {
            console.log(error);
            alert("Something went wrong!");
        });

});