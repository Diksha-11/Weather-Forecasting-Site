//Thunder
//<div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">
//Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> 


//Sun & Cloud 
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from 
//<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


//clouds
//<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
//Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


//sun
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from 
//<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>



//cloud
//<div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> 
//from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>



//snow
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
// <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


//rain
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from
// <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


let loc       = document.getElementById("location");
let tempicon  = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate   = document.getElementById("climate");
//let iconfile;
const searchInput  = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


if(searchButton){
searchButton.addEventListener('click' , (e) => {
	e.preventDefault();
	getWeather(searchInput.value);
	searchInput.value='';
});
}

const getWeather = async(city) =>{
	try{
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8e90e6914a546dd770800fe58a30003` ,
		{mode : 'cors'}
		);
		const weatherData = await response.json();
		console.log(weatherData);
		const {name}      =weatherData;
		const {feels_like}= weatherData.main;
		const {id, main}  = weatherData.weather[0];
		loc.textContent=name;
		climate.textContent=main;
		tempvalue.textContent= Math.round(feels_like-273);
		if (id<300 && id>200 ){
			tempicon.src = "./images/thunder.png";
		}
		else if (id<400 && id>300 ){
			tempicon.src = "./images/clouds.png";
		}
		else if (id<600 && id>500 ){
			tempicon.src = "./images/rain.png";
		} 
		else if (id<700 && id>600 ){
			tempicon.src = "./images/snowman.png";
		}
		else if (id<800 && id>700 ){
			tempicon.src = "./images/cloud.png";
		}
		else if (id == 800){
			tempicon.src = "./images/sun.png";
		}
   }

       catch(error){
	        alert("CITY NOT FOUND!");
   }

};


window.addEventListener("load", ()=> {
let long; 
let lat;   
                                
if(navigator.geolocation){
	
		navigator.geolocation.getCurrentPosition((position) =>{
long = position.coords.longitude;
lat = position.coords.latitude;

const proxy = "https://cors-anywhere.herokuapp.com/";

const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d8e90e6914a546dd770800fe58a30003` ;
fetch(api).then((response) => {
     return response.json();
})
.then (data =>{
	const{name} = data;
	const{feels_like} = data.main;
	const {id,main} = data.weather[0];
	
	loc.textContent=name;
	climate.textContent= main;
	tempvalue.textContent= Math.round(feels_like-273);

    if (id<300 && id>200 ){
		tempicon.src = "./images/thunder.png";
	}
    else if (id<400 && id>300 ){
		tempicon.src = "./images/clouds.png";
	}
    else if (id<600 && id>500 ){
		tempicon.src = "./images/rain.png";
	} 
	else if (id<700 && id>600 ){
		tempicon.src = "./images/snowman.png";
	}
	else if (id<800 && id>700 ){
		tempicon.src = "./images/cloud.png";
	}
    else if (id == 800){
		tempicon.src = "./images/sun.png";
	}

	console.log(data);
  })
	}
)}
});