(function(){
  'use strict'
  var vm = new Vue({
    el: '#app',
    data: {
      show: true
    },
    methods: {
      handleClick() {
        var count = this.$refs.count
        if (count) {
          count.innerText = parseInt(count.innerText,10) + 1
        }
      }
    }
  })
  var vm2 = new Vue({
    el: '#app2',
    data: {
      preview: ''
    },
    methods: {
      handleChage: function(event) {
        var file = event.target.files[0]
        if (file && file.type.match(/^image\/(png|jpeg|)$/)) {
          this.preview = window.URL.createObjectURL(file)
        }
      }
    }
  })
  var vm3 = new Vue({
    el: '#app3',
    data: {
      scrolly: 0,
      timer: null
    },
    created: function() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll: function() {
        if (this.timer == null) {
          this.timer = setTimeout(function(){
            this.scrollY = window.scrollY
            clearTimeout(this.timer)
            this.timer = null
          }.bind(this), 200)
        }
      }
    }
  })
  var scroll = new SmoothScroll()
  new Vue({
    el: '#app4',
    methods: {
      scrollTop: function(){
        scroll.animateScroll(0)
      }
    }
  })
})();
