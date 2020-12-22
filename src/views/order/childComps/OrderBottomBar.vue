<template>
  <div id="order-bottom-bar">
      <div class="count">共{{totalcount}}件</div>
      <div class="price">合计：￥{{totalprice}}</div>
      <div class="pay">去支付</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['selectCartlist']),
        totalcount(){
            let sumcount = 0;
            for(let item of this.selectCartlist) sumcount += item.count
            return sumcount
        },
        totalprice(){
            let sumprice= 0;
          for( let item of this.selectCartlist){
              sumprice= sumprice + item.price * item.count
          }
          return sumprice.toFixed(2)
        }
    }

}
</script>

<style scoped>
  #order-bottom-bar{
      line-height: 49px;
      height: 49px;
      width: 100%;
      right: 0;
      left: 0;
      bottom: 0px;
      z-index: 10;
      /* border: 1; */
      box-shadow: 0 -0.3px;
      display: flex;
      background-color: #eee;
      position: fixed;
      font-size: 14px;
  }

  .count{
      margin: 0 30px 0 5px;
  }

  .price{
      width: 140px;
      margin-left: 10px;
  }

  .pay{
      height: 40px;
      width: 90px;
      margin-top: 4.5px;
      border-radius: 30px;
      background-color: red;
      color: #fff;
      line-height: 40px;
      text-align: center;
  }

</style>