(function () {
  Vue.component('comp-child', {
    template: '<li>{{ name }} HP.{{ hp }} <button v-on:click="doAttack">攻撃する</button><slot></slot></li>',
    props: { id: Number, name: String, hp: Number },
    methods: {
      //ボタンのクリックイベントのhandleAttaclから$emitでattckが発火する
      doAttack: function () {
        //引数として自分のidを渡す
        this.$emit('attack', this.id)
      }
    }
  })
  new Vue ({
    el: '#app',
    data: {
      list: [
        {id: 1, name: 'AAAA', hp: 100},
        {id: 2, name: 'BBBB', hp: 200},
        {id: 3, name: 'CCCC', hp: 300}
      ]
    },
    methods: {
      //attackが発生した
      handleAttack: function(id){
        //引数idから要素を検索
        var item = this.list.find(function(el){
          return el.id === id
        })
        //HPが0より多ければ10減らす
        if (item !== undefined && item.hp > 0) item.hp -= 10
      }
    }
  });
})();
