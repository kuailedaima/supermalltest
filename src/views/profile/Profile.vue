<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center">个人</div></nav-bar>
    <user-info/>
    <account-info/>
    <normal-list-view :list-data="orderList"/>
    <normal-list-view :list-data="serviceList"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'
import NormalListView from './childComps/NormalListView'

export default {
   components:{
     NavBar,
     UserInfo,
     AccountInfo,
     NormalListView
   },

   data() {
    	return {
		    orderList: [
			    {icon: 'message.svg', info: '我的消息'},
			    {icon: 'pointer.svg', info: '我的地址'},
			    {icon: 'vip.svg', info: '我的订单'},
		    ],
		    serviceList: [
			    {icon: 'cart.svg', info: '我的购物车'},
			    {icon: 'shopping.svg', info: '下载购物APP'},
		    ]
      }
    }

}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }
  
  .profile-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>