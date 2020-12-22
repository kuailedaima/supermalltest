<template>
  <div id="after-pay">
    <div class="item">
      <div class="itemtitle">公益宝贝</div>
      <div class="iteminfo2"><div class="content">本次交易将用0.1元捐给给公益组织</div></div>
    </div>
    <div class="item">
      <div class="itemtitle">运费险</div>
      <div class="iteminfo">由卖家赠送</div>
    </div>
    <div class="item">
      <div class="itemtitle">配送方式</div>
      <div class="iteminfo">普通配送</div>
    </div>
    <div class="item">
      <div class="itemtitle">售后服务</div>
      <div class="iteminfo">七天无理由退货</div>
    </div>
    <div class="item">
      <div class="itemtitle">订单备注</div>
      <div class="iteminfo"><input type="text" name="beizhu" placeholder="请与卖家协商好"/></div>
    </div>
    <div class="subtotal">
      <div class="subprice">小计：￥{{showprice}}</div>
      <div class="subcount">共{{subcount}}件</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    subcount:Number,
    subprice:{
      type:String,
          default(){
              return {}
          }
    }
  },
  computed:{
    showprice(){
      return (this.subcount * this.subprice).toFixed(2)
    }
  },

}
</script>

<style scoped>
  #after-pay{
    margin-left: 40px;
    margin-top: 10px;
  }

  .item {
    height: 50px;
    width: 100%;
    /* background-color: red; */

    border: 1;
 
  }

  .itemtitle{
    float: left;
    width: 30%;
    height: 50px;
    /* text-align: center; */
    line-height: 50px;
    font-weight: bold;
    /* background-color: blue; */
  }

  .iteminfo{
    float: left;
    width: 70%;
    height: 50px;
    line-height: 50px;
  }

  .iteminfo2{
    float: left;
    width: 70%;
    height: 50px;
    font-size: 80%;
    font-weight: 500;
    position: relative;
  }

  .content{
    height: 28px;
    margin-top: 11px;
    margin-bottom: 11px;
  }

  input{
    outline: none;
    border: 0;
  }
  .subtotal{
    display: inline;
    float: right;
    height: 25px;
  }

  .subcount {
    height: 25px;
    line-height: 25px;
    float: right;
    font-size: 75%;
  }
  .subprice{
    height: 25px;
    line-height: 25px;
    float: right;
    color: orangered;
    margin-left: 30px;
    font-size: 85%;
  }


</style>