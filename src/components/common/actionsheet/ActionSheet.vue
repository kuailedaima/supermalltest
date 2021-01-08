<template>
  <div>
    <!-- <van-cell is-link title="基础用法" @click="show = true" /> -->
    <p @click="altershow">{{showinfo}}</p>
    <van-action-sheet  v-model="show" get-container="#app" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            showinfo:null,
            show:false
        }
    },
    props:{
        actions:{
            type:Array,
            default(){
                return {}
            }
        }
    },

    computed:{
      ...mapGetters(['isdisplay'])
    },
    created(){
      this.showinfo = this.actions[0].name
    },
    updated(){
      if(this.show == false) {
        this.isdisplay.maintabbar = true
        this.isdisplay.orderbottombar = true
      }
    },

    methods: {
      altershow(){
        this.show = true
        //是主菜单和订单结算栏不显示
        this.isdisplay.maintabbar = false
        this.isdisplay.orderbottombar = false
      },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      this.showinfo = item.name
    //   Toast(item.name);
    // this.$emit('onSelect',item);
    //是主菜单和订单结算栏显示
        this.isdisplay.maintabbar = true
        this.isdisplay.orderbottombar = true
    },
  },

}
</script>

<style scoped>
  .vas {
    z-index: 20;
    background-color: red;
  }

</style>