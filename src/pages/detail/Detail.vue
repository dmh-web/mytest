<template>
  <div>
    <detail-banner :img="bannerImg" :name="name" ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list" ></detail-list>
    </div>
  </div>
</template>

<script>
  import DetailBanner from '@/pages/detail/components/banner'
  import DetailHeader from '@/pages/detail/components/header'
  import DetailList from '@/pages/detail/components/list'
  import  axios from 'axios'
    export default {

        name: "Detail",
        components:{
          DetailBanner,
          DetailHeader,
          DetailList
        },
        data(){
          return{
            list:[],
            bannerImg:"",
            name:"",
          }
        },
        methods:{
          getListInfo(){
            axios.get('/static/moke/detail.json',{
              params:{ //拼接id
                id:this.$route.params.id
              }
            }).then(this.getSuccess)
          },
          getSuccess(res){
            res=res.data;
            if(res.ret&&res.data){
              const data=res.data;
              this.list=data.categoryList;
              this.bannerImg=data.bannerImg;
              this.name=data.sightName;
            }
          }
        },
        mounted(){
          this.getListInfo();
        }
    }
</script>

<style lang="stylus" scoped>
  .content{
    height 50rem;
    margin-top .2rem;

  }
</style>
