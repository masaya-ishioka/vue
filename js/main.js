(function(){
  'use strict'

  var vm = new Vue({
    el: '#app',
    data: {
      name: 'tanaka'
    }
  });
  var vm2 = new Vue({
    el: '#app2',
    data: {
      isTrue: true,
      todos: [
        'task1','task2','task3'
      ],
      addText: '',
      list:[],
    },
    methods: {
      addToDo() {
        if (this.addText) {
          this.list.push({ //pushは追加するメソッド
            text: this.addText
          });
        }
        this.addText = '';
      }
    }
  });
  var app3 = new Vue({
    el:'#app3',
    methods: {
      handClick: function(event){
        alert(event.target) // [object HTML ButtonElement]
      }
    }
  });
  var app4 = new Vue({
    el:'#app4',
    data: {
      show:true
    }
  });

  var app5 = new Vue({
    el:"#app5",
    data: {
      message: {
        value: "hello world"
      },
      list: ['いちご','なし','ななな'] ,
      num:1
    }
  });

  var app6 = new Vue({
    el:"#app6",
    data: {
      count: 0
    },
    methods: {
      push: function(){
        this.count += 1
      },
      reset: function(){
      this.count = 0
      }
    }
  });

  var app7 = new Vue({
    el:"#app7",
    data:{
      radius: 50
    }
  });

  var sample = new Vue({
    el:'#sample-template',
    data:{
      show:true
    }
  });


})();
