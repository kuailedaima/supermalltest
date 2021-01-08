<template>
  <div id="myorder">
    <nav-bar class="myorder-nav">
        <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg">
        </div>
        <div slot="center">我的订单</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <myorder-list/>
    </scroll>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import MyorderList from './childComps/MyorderList'
import Scroll from 'components/common/scroll/Scroll'

export default {
  components:{
    NavBar,
    MyorderList,
    Scroll
  },

  activated(){
    this.$refs.scroll.refresh()
  },
  
  methods:{
    backClick(){
      this.$router.back()
    }
  }

}
</script>

<style scoped>
  #myorder {
    /* z-index: 10; */
    position: relative;
    height: 100vh;
  }

  .myorder-nav{
    background-color: rgba(235, 228, 228, 0.788);
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