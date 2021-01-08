<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
    
    <main-tab-bar v-if="isdisplay.maintabbar"></main-tab-bar>
  </div>
</template>

<script>
// import MainTabBar from './components/content/mainTabbar/MainTabBar'
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  computed:{
      ...mapGetters(['isdisplay'])
  },
}
</script>

<style>
  @import "assets/css/base.css";
</style>
