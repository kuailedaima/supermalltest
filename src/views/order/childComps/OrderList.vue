<template>
  <div class="order-list">
      <!-- <address-item/> -->
      <order-list-item v-for="(item,index) in selectCartlist"
                        :key="index"
                        :item-info="item"/>
  </div>
</template>

<script>
// import AddressItem from './AddressItem'
import OrderListItem from './OrderListItem'
import {mapGetters} from 'vuex'
export default {
    props:{
        selectCartlist:{
            type:Array,
            default(){
                return {}
            }
        }
    },

    components:{
        // AddressItem,
        OrderListItem
    },

    computed:{
        // ...mapGetters(['selectCartlist'])
    },

}
</script>

<style scoped>
    .order-list{
        width: 100%;
        background-color: rgb(241,241,241)
    }

</style>