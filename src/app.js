var notificationElement = document.querySelector(".notification")
var iconElement = document.querySelector(".icon")
var tempElement = document.querySelector(".temp")
var descriptionElement = document.querySelector(".description")
var locationElement = document.querySelector(".location")
var userlocation = document.querySelector(".userloc")


function getweather() {
	// body...
	fetch('http://api.openweathermap.org/data/2.5/weather?q=' + userlocation.value + '&appid=e3d7efe364d9991231ff379a8b4262af')
      .then(response => response.json())
      .then(data => {console.log(data)
  	
  	var tempValue = data.main.temp;
  	var descValue = data.weather[0].description; 
  	var iconValue = data.weather[0].icon;
  	var locaValue = data.name;


  	descriptionElement.innerHTML = descValue;
  	tempElement.innerHTML = Math.floor(tempValue - 273.15) + " ℃";
  	iconElement.innerHTML = '<img src="icons/'+ iconValue +'.png">'
  	locationElement.innerHTML = locaValue;


  })

// .catch(err => notificationElement.innerHTML = "Wrong City Name!");
// }

// 没想出来怎么把这条信息去掉

.catch(err => alert('Wrong City Name'));

}
