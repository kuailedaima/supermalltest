import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//1.安装插件
Vue.use(Vuex)

//2.创建store对象
const state = {
    cartList:[],
    selectCartlist:[],
    buygoods:[],
    addresslist:[
        {
            id: 0,
            name: '张三',
            tel: '13000000000',
            province: '浙江省',
            city: '杭州市',
            county: '西湖区',
            addressDetail:'三路 138 号东方通信大厦 7 楼 501 室',
            areaCode: "330106",
            postalCode: '123456',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
          }
    ],
    id:0,
    selectAddresslist:[{select:false}],
    shippingaddress:
        {
            id: 0,
            name: '张三',
            tel: '13000000000',
            province: '浙江省',
            city: '杭州市',
            county: '西湖区',
            addressDetail:'三路 138 号东方通信大厦 7 楼 501 室',
            areaCode: "330106",
            postalCode: '123456',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
            isDefault: true,
          },
    //控制选中地址列表是否返回
    isback:false,
    //订单存储
    orderhistory:[],
    //订单编号
    ordernum:null
    
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

//3.挂载Vue实例上
export default store