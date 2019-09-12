<template>
  <div>
    <list-header></list-header>
    <list-banner></list-banner>
    <list-main  :letter="letter"></list-main>
    <list-view></list-view>
    <list-circuit @change="circuitScrollTop"></list-circuit>
    <div class="empty"></div>
  </div>
</template>

<script>
  import listBanner from '@/pages/hotlist/components/Banner'
  import listHeader from '@/pages/hotlist/components/Header'
  import listMain from '@/pages/hotlist/components/Main'
  import listView from '@/pages/hotlist/components/View'
  import listCircuit from '@/pages/hotlist/components/Circuit'
    export default {
        name: "Hotlist",
      data(){
        return{
          letter:null
        }
      },
      components:{
        listBanner,
        listHeader,
        listMain,
        listView,
        listCircuit
      },
      methods:{
        circuitScrollTop(letter){
          this.letter=letter;
        }

      },

    }
</script>

<style lang="stylus" scoped>
    .empty{
      height 10rem;
    }
</style>
