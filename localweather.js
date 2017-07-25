$(function(){

  if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
   var long;
   var lat;
   var fTemp;
   var cTemp;

   long = position.coords.longitude;
   lat = position.coords.latitude;
   //$("#data").html("latitude: " + lat + "<br>longitude: " + long);
   var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=480642e3dbfdebf02848ba0add962020";
   $.getJSON(api, function(data){
     var weatherType = data.weather[0].description;
     var windSpeed = data.wind.speed;
     var city = data.name;
     var kTemp = data.main.temp;
     var tempSwap = true;

     $("#icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
     fTemp = ((kTemp) * (9/5) - 459.67).toFixed(0);
     cTemp = (kTemp - 273).toFixed(1);
     $("#city").html(city);
     $("#weatherType").html(weatherType);
     $("#fTemp").html(fTemp + " &#8457;");
     $("#fTemp").click(function() {
       if (tempSwap === false) {
         $("#fTemp").html(cTemp + " &#8451;");
         tempSwap = true;
       }
       else {
         $("#fTemp").html(fTemp + " &#8457;");
         tempSwap = false;
       }
     })
     $("#cTemp").html(cTemp + " &#8451;");
     windSpeed = (2.237*(windSpeed)).toFixed(1);
     $("#windSpeed").html("Wind: " + windSpeed + " mph");

     if (fTemp > 80) {
       $('body').css('background-image', 'url("https://rampages.us/halawadhi96/wp-content/uploads/sites/5047/2015/02/nature-landscape-alluring-picture-hot-desert-sun-hd-wallpaper-background-hot-as-sun-desert-song-lyrics-hot-as-sun-desert-song-desert-hot-springs-sunshine-cafe-730x456.jpg")');
     }
     else if (fTemp > 70) {
       $('body').css('background-image', 'url("http://www.livewallpapers.org/wp-content/uploads/2012/11/sunny-hill.jpg")');
     }
     else if (fTemp > 60) {
       $('body').css('background-image', 'url("http://priroda.inc.ru/foto/gif1/f30.jpg")');
     }
   })
})
}
 });
//need to work on how to display the weather icon on my website.
