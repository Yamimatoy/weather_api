// async function fetchWeather() {
//     try {
//         const apiKey = 'f337e6a9d10c4a14b3a142907251002';
//         const locationInput = document.getElementById('location').value.trim();
        
//         if (!locationInput) {
//             alert("Please enter a location (latitude,longitude)");
//             return;
//         }

//         const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}`;

//         const response = await fetch(url);
//         const data = await response.json();

//         document.getElementById('cloud').innerText = `Cloud: ${data.current.cloud}%`;
//         document.getElementById('weather-icon').src = `http:${data.current.condition.icon}`;

//         document.getElementById('location1').innerText = `${data.location.name}`;
//         document.getElementById('country').innerText = `${data.location.name}, ${data.location.country}`;

//         document.getElementById('condition').innerText = `${data.current.condition.text}`;
//         document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
//         document.getElementById('latitude').innerText = `Latitude: ${data.location.lat}`;
//         document.getElementById('localtime').innerText = `Localtime: ${data.location.localtime}`;
//         document.getElementById('epoch').innerText = `Localtime_epoch: ${data.location.localtime_epoch}`;
//         document.getElementById('longitude').innerText = `Longitude: ${data.location.lon}`;
//         document.getElementById('name').innerText = `Name: ${data.location.name}`;
//         document.getElementById('region').innerText = `Region: ${data.location.region}`;
//         document.getElementById('tz_id').innerText = `Tz_id: ${data.location.tz_id}`;

//     } catch (error) {
//         console.error("Error fetching data:", error);
//         alert("Invalid location or API error.");
//     }
// }




async function fetchWeather() {
    try {
        const apiKey = 'f337e6a9d10c4a14b3a142907251002';
        const locationInput = document.getElementById('location').value.trim();
        
        if (!locationInput) {
            alert("Please enter a location (latitude,longitude)");
            return;
        }

        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationInput}`;

        console.log("Fetching data from:", url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Weather Data:", data); // Debugging step

        document.getElementById('cloud').innerText = `Cloud: ${data.current.cloud}%`;
        document.getElementById('weather-icon').src = `https:${data.current.condition.icon}`;

        document.getElementById('location1').innerText = `${data.location.name}`;
        document.getElementById('country').innerText = `${data.location.name}, ${data.location.country}`;

        document.getElementById('condition').innerText = `${data.current.condition.text}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById('latitude').innerText = `Latitude: ${data.location.lat}`;
        document.getElementById('localtime').innerText = `Localtime: ${data.location.localtime}`;
        document.getElementById('epoch').innerText = `Localtime_epoch: ${data.location.localtime_epoch}`;
        document.getElementById('longitude').innerText = `Longitude: ${data.location.lon}`;
        document.getElementById('name').innerText = `Name: ${data.location.name}`;
        document.getElementById('region').innerText = `Region: ${data.location.region}`;
        document.getElementById('tz_id').innerText = `Tz_id: ${data.location.tz_id}`;

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Invalid location or API error. Please try again.");
    }
}
