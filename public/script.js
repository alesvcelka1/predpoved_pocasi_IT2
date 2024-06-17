// Při kliknutí na tlačítko s id "get-weather-btn" se spustí tento kód
document.getElementById('get-weather-btn').addEventListener('click', function() {
    // Získání hodnoty z inputu s id "city-input" (název města)
    const city = document.getElementById('city-input').value;

    // API klíč pro OpenWeatherMap (pro přístup k jejich API)
    const apiKey = '2d12d772076f76e8d045593139e401ba';

    // URL adresa API pro získání aktuálního počasí daného města
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=cz`;

    // Volání funkce fetch pro získání dat z API
    fetch(apiUrl)
        .then(response => response.json()) // Převedení odpovědi na JSON formát
        .then(data => { // Zpracování JSON dat
            // Podmínka kontrolující, zda bylo město nalezeno (status kódu 200)
            if (data.cod === 200) {
                // Vytvoření HTML kódu s informacemi o počasí
                const weatherInfo = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Teplota: ${data.main.temp}°C</p>
                    <p>Pocitová teplota: ${data.main.feels_like}°C</p>
                    <p>Popis: ${data.weather[0].description}</p>
                    <p>Rychlost větru: ${data.wind.speed} m/s</p>
                `;
                // Vložení vytvořeného HTML kódu do elementu s id "weather-info"
                document.getElementById('weather-info').innerHTML = weatherInfo;
            } else {
                // Pokud město není nalezeno, vloží se do elementu "weather-info" chybové hlášení
                document.getElementById('weather-info').innerHTML = `<p>Město nenalezeno. Zkuste to prosím znovu.</p>`;
            }
        })
        .catch(error => {
            // Pokud dojde k chybě při volání API, vypíše se chybová zpráva do konzole
            console.error('Chyba:', error);
            // a do elementu "weather-info" se vloží chybové hlášení
            document.getElementById('weather-info').innerHTML = `<p>Došlo k chybě. Zkuste to prosím znovu.</p>`;
        });
});


