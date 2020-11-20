<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button 
                :isChecked="isSelectAll" 
                class="check-button"
                @click.native="checkClick"/>
          <span>全选</span>
      </div>
      <div class="price">
          合计：{{totalPrice}}
      </div>
      <div class="calculate">
          去计算({{checkLength}})
        </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
     components:{
        CheckButton
    },
    computed: {
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
            } else{
                this.$store.state.cartList.forEach(item => item.checked = true)
            }
            
        }
    }
                
}
</script>

<style scoped>
    .bottom-bar{
        line-height: 40px;
        right: 0px;
        left: 0px;
        bottom: 49px;
        height: 40px; 
        display: flex;
        background-color:#eee;
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