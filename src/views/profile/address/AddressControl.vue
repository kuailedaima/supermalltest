<template>
  <div id="address">
    <nav-bar class="addressedit-nav">
          <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.svg">
          </div>
          <div slot="center">增加地址</div>
      </nav-bar>
      <!-- 增加地址 -->
    <van-address-edit 
  :area-list="areaList"
  show-postal
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import { Toast } from 'vant';

import areaList from './area'
import {mapGetters, mapMutations} from 'vuex'

export default {
  components:{
        NavBar,
    },
    
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  computed:{
      ...mapGetters(['addresslist']),
      ...mapGetters(['id']),
    },

    deactivated() {
      this.$destroy()
    },

  methods: {
    ...mapMutations(['saveAddress']),
    ...mapMutations(['idincrease']),
    onSave(e) {
      Toast('save');
      let data = {};
      this.idincrease()
      data.id = this.id;
      data.name = e.name;
      data.tel = e.tel;
      data.province = e.province;
      data.city = e.city;
      data.county = e.county;
      data.address = e.province + e.city + e.county + e.addressDetail + "";
      data.addressDetail = e.addressDetail;
      data.areaCode = e.areaCode;
      data.postalCode = e.postalCode;
      data.isDefault = e.isDefault;
      this.saveAddress(data)
      console.log(data);
      this.backClick()
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    backClick(){
        this.$router.back()
        }
  },
};
</script>

<style scoped>
  .addressedit-nav{
        background-color: #fff;
    }

    .back img{
        margin-top: 12px;
    }

</style>