<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cityList"></city-search>
      <city-list :hotCity="hotCity" :cityList="cityList" :letter="letter"></city-list>
      <city-aside @change="cityClickChange" :aside="cityList"></city-aside>
    </div>
</template>

<script>
  //引入组件
  import CityHeader from '@/pages/city/components/Header'
  import CitySearch from '@/pages/city/components/Search'
  import CityList   from '@/pages/city/components/List'
  import CityAside  from '@/pages/city/components/Aside'
  import axios from 'axios'
    export default {
        name: "City",
        components:{
          CityHeader,
          CitySearch,
          CityList,
          CityAside
        },
      data(){
          return{
            hotCity:[],//热门城市定义
            cityList:{},
            letter:''

          }
      },
      methods:{
          getCityInfo(){
            axios.get('/static/moke/city.json').then(this.getSucc);
          },
          getSucc(res){
            res=res.data;
            if(res.ret&&res.data){
                const data=res.data;
                this.hotCity=data.hotCities;
                this.cityList=data.cities;

            }
          },
          cityClickChange(letter){

            this.letter=letter;

          }
      },
      mounted(){
          this.getCityInfo();
      }
    }
</script>

<style scoped>

</style>

