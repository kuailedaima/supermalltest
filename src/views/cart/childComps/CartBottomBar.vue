<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button 
                :isChecked="isSelectAll" 
                class="check-button"
                @click.native="checkClick"/>
          <span>全选</span>
      </div>
      <div class="price" v-if="iscontrol">
          合计：{{totalPrice}}
      </div>
      <div class="price" v-if="!iscontrol">
          &nbsp;&nbsp;&nbsp;
      </div>
      <div class="calculate" @click="calcClick" v-if="iscontrol">
          去计算({{checkLength}})
      </div>
      <div class="calculate" @click="deleteClick" v-if="!iscontrol">
          删除
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'

export default {
     components:{
        CheckButton
    },
     props: {
	  iscontrol:null
    },
    computed: {
        //加入数组
        ...mapGetters(['selectCartlist']),
        ...mapGetters(['cartList']),

        // selectCartlist: {
        //     set(){}
        // },

        totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
            return item.checked
        }).reduce((preValue,item) => {
            return preValue + item.price * item.count
        },0).toFixed(2)
        },

        checkLength(){
            // return this.$store.state.cartList.filter(item => item.checked).length
            return this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((preValue,item) => {
                return preValue +  item.count
            },0)
        },

        isSelectAll(){
            if(this.$store.state.cartList.length === 0) return false
            //方法1
            // return !this.$store.state.cartList.find(item =>!item.checked)
            //方法2
            for(let item of this.$store.state.cartList) {
                if(!item.checked) {
                    return false
                }
            }
            return true
        }
    },
    methods:{
        checkClick(){
            if(this.isSelectAll) {
                this.$store.state.cartList.forEach(item => item.checked = false)
                this.selectCartlist.length = 0
                // console.log('全部取消');
            } else{
                this.$store.state.cartList.forEach(item => item.checked = true)
                // this.selectCartlist = this.cartList.splice(0,this.cartList.length)
                for(let i=0;i<this.cartList.length;i++)
                    this.selectCartlist[i] = this.cartList[i]
                // console.log('全部选中');
            }
            // this.$store.state.cartList.splice(1, 1);
            // console.log(this.$store.state.cartList);
            
        },

        //判断是否选中商品
        calcClick(){
            let i=0;
            for(let item of this.$store.state.cartList) {
                i++;
                if(item.checked) {
                    break;
                }
                if(i ==this.$store.state.cartList.length){
                    this.$toast.show('请选择购买的商品',2000)
                }
            }
            if(i == 0) this.$toast.show('购物车为空',2000)
        },

        //删除商品
        deleteClick(){
            let i=0;
            for(let item of this.$store.state.cartList) {
                i++;
                if(item.checked) {
                    break;
                }
                if(i ==this.$store.state.cartList.length){
                    this.$toast.show('请选择删除的商品',2000)
                }
            }
            if(i == 0) this.$toast.show('购物车为空',2000)
            for(let j =0;j<=this.selectCartlist.length;j++){
                this.remove(this.cartList,this.selectCartlist[j])
            }
            this.selectCartlist.length = 0
            // console.log(this.selectCartlist);
        },

      //把取消选中的元素删除
      remove(arr,val) {
        for(var i=0; i<arr.length; i++) {
        if(arr[i] == val) {
          arr.splice(i, 1);
          break;
         }
        }
      },
    }
                
}
</script>

<style scoped>
    .bottom-bar{
        line-height: 40px;
        right: 0px;
        left: 0px;
        bottom: 55px;
        height: 40px; 
        display: flex;
        background-color: #eee;
        position: fixed;
        font-size: 14px;
    }

    .check-content{
        display: flex;
        align-items: center;
        margin-left: 10px;
        width: 60px;
    }

    .check-button{
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-right: 5px;
    }

    .price{
        margin-left: 20px;
        flex: 1;
    }

    .calculate{
        width: 90px;
        background-color: red;
        color: #fff;
        text-align: center;
    }

</style>