<template>
  <div id="order">
      <nav-bar class="order-nav">
          <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.svg">
          </div>
          <div slot="center">确认订单</div>
      </nav-bar>
      <div class="scroll">
        <scroll class="content" ref="scroll">
            <address-item @click.native="switchover"/>
          <order-list :selectCartlist="buygoods"/>
        </scroll>
      </div>
      <order-bottom-bar :selectCartlist="buygoods" v-if="isdisplay.orderbottombar"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll'
import AddressItem from './childComps/AddressItem'

import OrderList from './childComps/OrderList.vue';
import OrderBottomBar from './childComps/OrderBottomBar.vue';
import {mapGetters,mapMutations } from 'vuex'

export default {
    // data(){
    //     return {
    //         selectCartlist:[]
    //     }
    // },
    components:{
        NavBar,
        Scroll,
        OrderList,
        OrderBottomBar,
        AddressItem
    },

    destroyed(){
        // console.log('执行了销毁');
    },

    computed:{
        ...mapGetters(['selectCartlist']),
        ...mapGetters(['buygoods']),
        ...mapGetters(['isdisplay'])
    },

    methods:{
        ...mapMutations(['alterisback']),
      switchover(){
        this.alterisback()
        this.$destroy()
        this.$router.push('/myaddress')
      },
        backClick(){
            this.$destroy()
            this.$router.back()
        }
    }

}
</script>

<style scoped>
    #order{
    position: relative;
    height: 100vh;
   }
    .nav-order{
        background-color: #fff;
    }

    .back img{
        margin-top: 12px;
    }

    .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    }

    /* .scroll {
        margin-top: 10px; */
        /* clear: both;
    } */

</style>