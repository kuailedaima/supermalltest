<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar  class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!-- 商品的列表 -->
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>

    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childComps/CartList'
import Scroll from 'components/common/scroll/Scroll'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'
export default {
  components:{
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },

  computed:{
    //方法1
    // ...mapGetters(['cartLength','cartList'])
    //方法2
    ...mapGetters({
      length:'cartLength'
    })
  },

  activated(){
    this.$refs.scroll.refresh()
  }

}
</script>

<style scoped>
  #cart{
    position: relative;
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    /* font-weight: 700; */
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