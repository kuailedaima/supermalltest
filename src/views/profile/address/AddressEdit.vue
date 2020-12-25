<template>
  <div id="address">
    <nav-bar class="addressedit-nav">
          <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.svg">
          </div>
          <div slot="center" >编辑地址</div>
      </nav-bar>
<!-- 修改地址 -->
<van-address-edit v-if="selectAddresslist[0].select"
  :area-list="areaList"
  :address-info="selectAddresslist[1]"
  show-postal
  show-delete
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
      ...mapGetters(['selectAddresslist']),
    },

    destroyed(){},
    deactivated() {
      this.$destroy()
    },
    
  methods: {
    // ...mapMutations(['saveAddress']),
    // ...mapMutations(['updateAddress']),
    ...mapMutations(['delete']),
    onSave(data) {
      Toast('save');
       let index = this.selectAddresslist[2]
       this.addresslist[index].id = data.id;
       this.addresslist[index].name = data.name;
       this.addresslist[index].tel = data.tel;
       this.addresslist[index].province = data.province;
       this.addresslist[index].city = data.city;
       this.addresslist[index].county = data.county;
       this.addresslist[index].addressDetail = data.addressDetail;
       this.addresslist[index].areaCode = data.areaCode;
       this.addresslist[index].postalCode = data.postalCode;
       this.addresslist[index].isDefault = data.isDefault;
       this.addresslist[index].address = data.province + data.city + data.county + data.addressDetail + "";
       this.$router.back()
    },
    onDelete() {
      Toast('delete');
      this.delete(this.selectAddresslist[1].id)
      this.backClick()
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
        // this.$router.back(-1)
        this.$router.go(-1)
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