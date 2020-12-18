<template>
  <div class="order-list">
      <order-list-item v-for="(item,index) in selectCartlist"
                        :key="index"
                        :item-info="item"/>
  </div>
</template>

<script>
import OrderListItem from './OrderListItem'
import {mapGetters} from 'vuex'
export default {
    components:{
        OrderListItem
    },

    computed:{
        ...mapGetters(['selectCartlist'])
    },

}
</script>

<style scoped>
    .order-list{
        width: 100%;
    }

</style>