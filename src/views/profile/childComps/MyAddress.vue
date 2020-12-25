<template>
  <div id="my-address">
      <nav-bar class="address-nav">
          <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.svg">
          </div>
          <div slot="center">我的地址</div>
      </nav-bar>
      <address-list/>
      <!-- <address-control/> -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import AddressList from '../address/AddressList'

export default {
    components:{
        NavBar,
        AddressList
    },
   
    methods:{
        backClick(){
            this.$router.back()
        }
    }

}
</script>

<style scoped>
  .address-nav{
    background-color: rgba(235, 228, 228, 0.788);
  }

    .back img{
       margin-top: 12px;
    }

</style>