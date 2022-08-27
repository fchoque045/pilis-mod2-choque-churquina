
// Función para realizar la petición post enviando los datos del formulario
function onClick (event) {
    event.preventDefault();
    
    const formulario = {
        comercio: document.getElementById('comercio').value,
        titular: document.getElementById('titular').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value
    }
    console.log(formulario);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formulario),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((response) => response.json())
        .then((json) => { 
            console.log(json);
            Swal.fire(
                'Enviado',
                'Gracias por inscribite al evento', 
                'success'
            );
            cleanForm();
    })
    .catch((err) => console.log(err));
    
}

function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
	
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

// funcion para mostrar los datos en el DOM

function displayData(ApiWeather){
    let temp = document.getElementById("temp");
    let description = document.getElementById("description-weather");
    let humidity = document.getElementById("humidity");
    let speed = document.getElementById("speed");
    let dateEvento = new Date(2022, 7, 30, 9, 00, 00); //30 Agosto
    let icon = document.getElementById("icon-weather");

    for (let i = 0; i < ApiWeather.list.length ; i++) {
        let element = ApiWeather.list[i];
        let date = new Date(element.dt_txt);
        if (date > dateEvento) {
            console.log(element);
            temp.textContent = element['main']['temp']
            description.textContent = element['weather'][0]['description']
            humidity.textContent = `${element['main']['temp']}%`
            speed.textContent = `${element['wind']['speed']}m/s`
            if (element['weather'][0]['main'] == 'Clear') {
                icon.src="assets/icons-clima/sunny.png";
            }
            if (element['weather'][0]['main'] == 'Clouds') {
                icon.src="assets/icons-clima/cloudy.png";
            }
            if (element['weather'][0]['main'] == 'Rain') {
                icon.src="assets/icons-clima/rainy.png";
            }
            if (element['weather'][0]['main'] == 'Snow') {
                icon.src="assets/icons-clima/snowy.png";
            }
            if (element['weather'][0]['main'] == 'Thunderstorm') {
                icon.src="assets/icons-clima/stormy.png";
            }
            break;
        }
     }
}

// Funcion para realizar la petición get a la api openweathermap

async function getWeather5days() {
    let lat = -24.18325
    let lon = -65.33134
    const KEY_API = 'b5f09467b1a8302c47ddbc3ba50fd6e9';
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY_API}&units=metric&lang=es`);
        let weatherResponse = await response.json();
        displayData(weatherResponse);
        
    } catch {
      console.log("Algo paso, no se pudo resolver...");
    }
  }

getWeather5days();

