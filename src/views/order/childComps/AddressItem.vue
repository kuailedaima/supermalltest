<template>
  <div id="addressitem">
      <div class="item-img">
          <img src="../../../assets/img/address/address.svg" alt="定位图片">
      </div>
      <div class="name">{{shippingaddress.name}} {{shippingaddress.tel}}</div>
      <div class="address">{{shippingaddress.address}}</div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    computed:{
      ...mapGetters(['shippingaddress']),
    },

    updated(){
      // console.log('更新');
    },

    destroyed(){
      
    },
      
    methods:{
      // ...mapMutations(['alterisback']),
      // switchover(){
      //   this.alterisback()
      //   this.$destroy()
      //   this.$router.push('/myaddress')
      // }
    }

}
</script>

<style scoped>
  #addressitem {
      margin: 20px;
      margin-top: 20px;
      height: 60px;
      border-radius: 10px;
      background-color: #fff;
  }

  .item-img {
      margin: 5px;
      height: 60px;
      width: 20%;
      float: left;
  }

  .item-img img {
    width: 40px;
    height: 50px;
    display: block;
    border-radius: 5px;
  }

  /* .info {
      float: left;
      width: 80%;
  } */

  .name {
      height: 20px;
      /* width: 80%; */
      /* float: left; */
      align-items: center;
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 22px;
  }

  .address {
      color: #323233;
      font-size: 13px;
      line-height: 18px;
      /* width: 80%;
      float: left; */
  }
</style>

