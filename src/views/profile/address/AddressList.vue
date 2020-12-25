<template>
  <div>
      <van-address-list
  v-model="chosenAddressId"
  :list="addresslist"
  
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'


export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    };
  },

computed:{
      ...mapGetters(['addresslist']),
      ...mapGetters(['selectAddresslist'])
    },

  methods: {
    ...mapMutations(['alterAddress']),
    onAdd() {
      Toast('新增地址');
      this.$router.push('/myaddress/addresscontrol')
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
      this.selectAddresslist[2] = null
      this.selectAddresslist[0].select = true,
      this.alterAddress(index)
      this.selectAddresslist[2] = index
      this.$router.push('/myaddress/addressedit')
    },
  },
};
</script>

<style>

</style>