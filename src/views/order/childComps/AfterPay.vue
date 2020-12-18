<template>
  <div id="after-pay">
    <div class="publicwelfare">
      <div class="itemtitle">公益宝贝</div>
      <div class="iteminfo"><div class="content">本次交易将用0.1元捐给给公益组织</div></div>
    </div>
    <div class="publicwelfare">
      <div class="itemtitle">运费险</div>
      <div class="iteminfo"><div class="content">由卖家赠送</div></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #after-pay{
    margin-left: 40px;
    margin-top: 30px;
  }

  .publicwelfare{
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
    font-size: 80%;
    font-weight: 500;
    position: relative;
  }

  .content{
    /* background-color: #fff; */
    height: 28px;
    margin-top: 11px;
    margin-bottom: 11px;
    /* line-height: 28px; */
  }

</style>