import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex
//使用vuex
Vue.use(Vuex);

//创建Vuex实例
const store=new Vuex.Store({

  state:{ //定义公共的数据
    city: localStorage.city||"马泉营",

  },
  actions:{
    changeCity(ctx,city){  //ctx中有一个方法 名为:commit
                                         // 通过commit来调用mutations
      console.log(ctx);
      ctx.commit('changeCity',city); //需要调用mutations去改变公共数据
    }
  },
  mutations:{
    changeCity(state,city){
      this.state.city=city;
      localStorage.city=city; //本地存储 页面刷新 值不会消失
    }
  }
});

export default store  //导出store
