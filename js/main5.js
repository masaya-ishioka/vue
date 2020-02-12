(function(){
  'use strict'

  var vm = new Vue({
    el: '#app',
    data: {
      budget: 300,
      limit: 2,
      list: [
        { id: 1, name: 'リンゴ', price: 100 },
        { id: 2, name: 'ばなな', price: 200 },
        { id: 3, name: 'いちご', price: 300 },
        { id: 4, name: 'なし', price: 400 },
        { id: 5, name: 'パイナップル', price: 500 }
      ]
    },
    computed: {
      //budget以下のリストを返す算出プロパティ
      matched: function() {
        return this.list.filter(function(el){
          return el.price <= this.budget
        }, this)
      },
      // matchedで返ったデータをlimit件返す算出プロパティ
      limited: function() {
        return this.matched.slice(0, this.limit)
      }
    }
  });

  var vm2 = new Vue({
    el: '#app2',
    computed: {
      computedData: function() { return Math.random() }
    },
    methods: {
      methodsData: function() { return Math.random() }
    }
  });
})();
