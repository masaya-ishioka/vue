var app = new Vue({
  el: '#app',
  data: {
    city: null,
    temp: null,
    condition: {
      main: null
    }
  },
  mounted: function(){
    var place = 'tamachi,jp'
    var url = 'https://api.openweathermap.org/data/2.5/weather/?APPID=c7841c59c1df1a1cf64941db3b33c5c3&q=' + place;
    axios.get(url)
    .then(response => {
      console.log(response)
      this.city = response.data.name
      this.temp = Math.round(response.data.main.temp -273.15)
      this.condition = response.data.weather[0]
    })
    .catch((error) =>{
      console.log(error)
    })
  }
});