
window._ = require('lodash');
import Vue from 'vue';
import router from './routes.js'
import store from './store.js'

// 引入vuetify
import vuetify  from "./vuetify";
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import i18n from  './plugins/vue-i18n'
import './md_editor'
new Vue({
  //定义Vue绑定的根元素
  el: '#app',
  //将上面声明的路由器传递到根Vue实例
  router,
  store,
  i18n,
  vuetify
}).$mount('#app'); //将这个实例挂载到id=app的根元素上
