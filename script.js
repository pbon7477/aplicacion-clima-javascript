
const urlBase =  'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '2909892710a6aa6fc13cff7512c9ba8f';

const difkelvin = 273.15;




let botonBusqueda = document.getElementById('botonBusqueda');

botonBusqueda.addEventListener('click',()=>{
    let ciudad = document.getElementById("ciudadEntrada").value;

    if(ciudad){
        fetchDataClima(ciudad)
    }
})

const fetchDataClima = (ciudad)=>{
    fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
    .then((response)=>response.json())
    .then((resp)=>mostarDatosClima(resp))

}

const mostarDatosClima = (data)=>{
    const datosClima = document.getElementById('datosClima');
    datosClima.innerHTML = '';

    const iconoClima = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
    const ciudadNombre = data.name;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description; 

    const iconoImg = document.createElement('img');
    iconoImg.src = iconoClima;

    const ciudadTitulo = document.createElement('h1');
    ciudadTitulo.textContent = ciudadNombre;

    const temperaturaTitulo = document.createElement('h2');
    temperaturaTitulo.textContent = `La temperatura es : ${Math.floor(temperatura-difkelvin)}°C`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion meteorologica es : ${descripcion}`;


   datosClima.appendChild(iconoImg); 
   datosClima.appendChild(ciudadTitulo); 
   datosClima.appendChild(temperaturaTitulo); 
   datosClima.appendChild(descripcionInfo); 

};