document.getElementById("clickMe").addEventListener("click", function() {
    document.getElementById("message").innerText = "You clicked the button!";
});

document.getElementById("loginForm").addEventListener("submit", function() {
    event.preventDefault(); // Prevent page reload

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        document.getElementById("loginMessage").innerText = "Login successful!";
    } else {
        document.getElementById("loginMessage").innerText = "Invalid username or password!";
    }
});

document.getElementById("getWeather").addEventListener("click", function(){
    let city = document.getElementById("city").value;
    let apiKey ="5d2f05c9ffe7eff199ed06cda16790ea"; // Get it from openweathermap.org 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherResult").innerText = `Temperature in ${city}: ${data.main.temp}°C`
        })
        .catch(error =>{
            document.getElementById("weatherResult").innerText = "City not found!";
        });
});

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password){
        localStorage.setItem("username", username);
        document.getElementById("loginMessage").innerText = `Welcome back, ${username}!`;
    }
});

// Auto fill username if stared
window.onload = function(){
    let savedUsername = localStorage.getItem("username");
    if (savedusername){
        document.getElementById("username").value = savedUsername;
    }
};
