(function () {
  const vm = new Vue({
    el: '#app',
    data: {
      results: []
    },
    mounted() {
      axios.get("https://our-our-api.herokuapp.com/")
      .then(response => {
        console.log(response);
        this.results = response.data;
      })
    }
  });
})();
