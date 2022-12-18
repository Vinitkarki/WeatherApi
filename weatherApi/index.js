function getweatherdata(){
    navigator.geolocation.getCurrentPosition((success)=>{
      let {latitude,longitude} =success.coords;
      document.getElementById("lat").innerHTML= latitude
      document.getElementById("long").innerHTML= longitude
      latitude.innerHTML = latitude;
      longitude.innerHTML = longitude;
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b2b6c94e240f6e37d71a7601dd6511c0`
      console.log(url);
      fetch(url).then(res=> res.json()).then(data=>{
        // console.log(data);
        showWethereData(data)
      })
    })
  }
  function showWethereData(data) {
  
        document.getElementById("location").innerHTML= `${data.name}`
        document.getElementById("latti").innerHTML = `${data.coord.lat}`
        document.getElementById("logit").innerHTML = `${data.coord.lon}`
        document.getElementById("Time_Zone").innerHTML = `${data.timezone}`
        document.getElementById("Wind_speed").innerHTML =`${data.wind.speed}`
        document.getElementById("pressure").innerHTML = `${data.main.pressure}`
        document.getElementById("Humidity").innerHTML = `${data.main.humidity}`;
        document.getElementById("Wind_Direction").innerHTML =`${data.wind.speed}`;
        document.getElementById("Temp").innerHTML = `${data.main.temp}`
        document.getElementById("Feels_like").innerHTML = `${data.main.feels_like}`
        

        // const name=`${data.name}`
        // console.log(name);
  }
  
   
  
  // to display map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: 29.218, lng: 79.4714 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
  
  let button = document.getElementById("btn");
  button.onclick = getweatherdata()