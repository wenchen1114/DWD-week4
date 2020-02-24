const x = document.getElementById('word');
let lon = 0;
let lat = 0;
let url = 0;
let lonO = 0;
let latO = 0;
const api = '247473dab9ee14ca9fce974c750406b1';
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      if (lon>0){
        lonO = lon-180;
      }else{
        lonO = lon+180;
      }
      latO = lat*-1;
      url = `http://api.openweathermap.org/data/2.5/weather?lat=${latO}&lon=${lonO}&appid=${api}&units=metric`;
      getData();

    });
  } else {
    document.getElementById('word').textContent= "Geolocation is not supported by this browser.";
  }
}

function getData() {
  fetch(url).then(datas => {
    return datas.json();
  }).then( weather => {
    console.log(weather);
    document.getElementById('weather').textContent = weather.main.temp+'°C';
    let icon = weather.weather[0].icon;
    console.log(icon);
    let img = document.createElement("IMG");
    img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    img.style.height = "300px";
    img.style.width = "300px";
   
    document.getElementById('title').appendChild(img);
    if(weather.name !== ""){
      document.getElementById('city').textContent = weather.name;
    }else{
      document.getElementById('city').textContent = "It seems like no one nears you.";
    }
})}

function getMap(){

}

  getLocation();



