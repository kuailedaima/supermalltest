import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';
import { Dialog } from 'vant';
import { ActionSheet } from 'vant';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})

//使用地址列表插件
Vue.use(AddressList)

//使用地址编辑插件
Vue.use(AddressEdit);

//注册弹出框组件
Vue.use(Dialog);

//注册动作面板
Vue.use(ActionSheet);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
