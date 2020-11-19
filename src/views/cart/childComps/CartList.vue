<template>
  <div class="cart-list">
      <cart-list-item 
            v-for="(item,index) in cartList" 
            :key="index" 
            :item-info="item"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import cartListItem from './CartListItem'

import {mapGetters} from 'vuex'
export default {
    components:{
        Scroll,
        cartListItem
    },
    computed:{
        ...mapGetters(['cartList'])
    }

}
</script>

<style scoped>
    .cart-list{
        /* height: 100vh; */
        width: 100%;
    }

</style>