<template>
  <div id="myorder-list">
      <myorder-list-item v-for="(item,index) in orderhistory"
                        :key="index"
                        :item-info="item[0]"/>
  </div>
</template>

<script>
import MyorderListItem from './MyorderListItem'
import {mapGetters} from 'vuex'
export default {
    components:{
        MyorderListItem
    },

    computed:{
        ...mapGetters(['orderhistory'])
    },

}
</script>

<style scoped>
  .myorder-list{
        width: 100%;
        background-color: rgb(241,241,241)
    }

</style>