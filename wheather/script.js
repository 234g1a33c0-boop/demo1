/*let babysitter={
    name:"sara",
    age:25,
    experience:3,
    languages:["english","arabic"]
}
let jsonstring=JSON.stringify(babysitter);
console.log( "json string",jsonstring);
let obj=JSON.parse(jsonstring);
console.log("object",obj);

let books={
    title:"the secret",
    author:"rhonda byrn",
    year:2006,
    pages:198
}   
let jsonstring2=JSON.stringify(books);
console.log("json string",jsonstring2);
let obj2=JSON.parse(jsonstring2);
console.log("object",obj2);
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log("error",error));  
fetch("https://jsonplaceholder.typicode.com/users/")
.then(response=>response.json())``
.then(data=>console.log(data))
.catch(error=>console.log("error",error));



// Fetch oll  users and show in console + page 
fetch("https://jsonplaceholder.typicode.com/comments/")
.then(res => res.json())
.then(users =>{
    let output = "<h3>User List</h3><ul>";
    users.forEach(usern =>{
        output += `<li>${usern.name} - (${usern.email})</li>`;
    });
    output += "</ul>";
    document.body.innerHTML = output;   
});*/
/*const cityCoords = {
    "New York": { lat: 40.7128, lon: -74.0060 },
    "Los Angeles": { lat: 34.0522, lon: -118.2437 },
    "Chicago": { lat: 41.8781, lon: -87.6298 },
    "Houston": { lat: 29.7604, lon: -95.3698 },
    "Miami": { lat: 25.7617, lon: -80.1918 }
};
document.getElementById("fetchBtn").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.tolowerCase();
    if (cityCoords[city]) {
        document.getElementById("weather").innerHTML = " city  not found.please enter a valid city name.";
        return;
    }
    let coords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.current_weather) {
            document.getElementById("weather").innerHTML = `
            <h3>Current Weather in ${city}</h3>
            <p>Temperature: ${data.current_weather.temperature}°C</p>
            <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
            <p>time:${data.current_weather.time}</p>
            `;
        } else {
            document.getElementById("weather").innerHTML = " no data  available.";
        }
    })
    .catch(error => {
        console.error(error);
        document.getElementById("weather").innerHTML = "Error fetching weather data.";
    });
    .catch(error => {
        console.error(error);
        document.getElementById("weather").innerHTML = "Error fetching weather data.";
    });
}); */
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};


// Event Listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "⚠️ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  // AJAX Fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "⚠️ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "⚠️ Error fetching weather.";
    });
});
