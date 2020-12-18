<template>
  <div id="order">
      <nav-bar class="order-nav">
          <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.svg">
          </div>
          <div slot="center">确认订单</div>
      </nav-bar>
      <scroll class="content" ref="scroll">
          <order-list/>
      </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll'
import OrderList from './childComps/OrderList.vue';
import {mapGetters} from 'vuex'

export default {
    components:{
        NavBar,
        Scroll,
        OrderList
    },

    computed:{
        ...mapGetters(['selectCartlist'])
    },

    methods:{
        backClick(){
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

</style>