<template>
  <div id="order-bottom-bar">
      <div class="count">共{{totalcount}}件</div>
      <div class="price">合计：￥{{totalprice}}</div>
      <div class="pay" @click="clickpay">去支付</div>
  </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
import { Dialog } from 'vant';
export default {
    props:{
        selectCartlist:{
            type:Array,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            temorder:[]
        }
    },
    computed:{
        // ...mapGetters(['selectCartlist']),
        // ...mapGetters(['cartList']),
        ...mapGetters(['orderhistory']),
        ...mapGetters(['shippingaddress']),
        ...mapGetters(['buyjumptag']),
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
    },

    methods:{
        ...mapMutations(['deleteselect']),
        // ...mapActions(['deleteselect']),
        getNowTime(tag) {
          let dateTime
          let ordernumfirst
          let yy = new Date().getFullYear()
          let mm = new Date().getMonth() + 1
          let dd = new Date().getDate()
          let hh = new Date().getHours()
          let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes()
              :
              new Date().getMinutes()
          let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds()
              :
              new Date().getSeconds()
          dateTime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
          ordernumfirst = yy.toString() +mm.toString() +dd.toString() +
                          hh.toString() +mf.toString() +ss.toString() ;
          if(tag == 'data')
            return dateTime;
          if(tag == 'num')
            return ordernumfirst;
          
        },
        //点击去支付
        clickpay(){
            let ordernumlast = 1000
            for(let i=0;i<this.selectCartlist.length;i++){
                
                let n = this.orderhistory.length;
                this.temorder.push(this.selectCartlist[i])
                this.temorder.push(this.shippingaddress)
                ordernumlast++;
                this.temorder.push(this.getNowTime('num') + ordernumlast.toString())
                this.temorder.push(this.getNowTime('data'))
                this.orderhistory.push(this.temorder);
                this.temorder = []
            }

            Dialog.alert({
                message: '支付成功',
                theme: 'round-button',
            }).then(() => {
                if(this.buyjumptag == true) {
                    this.deleteselect();
                }
                  
                this.$router.back()
                // on close
            });
            console.log(this.orderhistory);
        },
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