(function () {
  var app = new Vue ({
    //option
    el: '#app', //html id から参照 エレメントの意味
    //リアクティブデータ
    data: {
      imagePath: '',
      width: 100,
      userName: '',
    },
    methods: {
      clickCat: function(){
        this.imagePath = 'https://neko-niwa.com/wp-content/uploads/2019/04/55827192_573875943124686_5120495417256077232_n-600x600.jpg'
      },
      clickDog: function(){
        this.imagePath = 'https://www.min-inuzukan.com/images/dog_img_shiba.jpg?18102302'
      },
      clickWidth: function(){
        this.width = 500
      }
    }
  })
})();
