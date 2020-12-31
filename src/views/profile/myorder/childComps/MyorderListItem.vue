<template>
  <div id="myorderlistitem">
    <div class="dealinfo">交易成功</div>
    <div id="myorder-list-item">
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>

  </div>
  
  
      
</template>

<script>
export default {
    // components:{
    //     AfterPay
    // },
    props:{
        itemInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },

}
</script>

<style scoped>
  #myorderlistitem{
    border: 1px solid #ccc;
    border-radius: 15px;
    margin: 10px;
    background-color: #fff;
  }
  #myorder-list-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    /* border-bottom: 1px solid #ccc; */
  }

  .dealinfo {
    clear: both;
    float: none;
    /* display: inline; */
    width: 90%;
    font-size: 14px;
    color: red;
    text-align: right;
    margin: 10px;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 15px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
    /* font-size: 10px; */
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }

</style>