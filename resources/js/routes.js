
/*
 |-------------------------------------------------------------------------------
 | routes.js
 |-------------------------------------------------------------------------------
 | Contains all of the routes for the application
 */

/**
 * Imports Vue and VueRouter to extend with the routes.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * Extends Vue to use Vue Router
 */
Vue.use( VueRouter )

/**
 * Makes a new VueRouter that we will use to run all of the routes for the app.
 */

export default new VueRouter({
  mode:'history',
  srcollBehavior(to,from,savedPosition){
    if(to.hash){
      return {
        selector:to.hash
      }
    }
  },
  routes: [
    {
      path: '/login',
      name: '登录',
      components: Vue.component( 'login', require( './views/Login' ) )
    },
    {
      path: '/reg',
      name: '注册',
      components: Vue.component( 'reg', require( './views/Reg' ) )
    },
    {
      path: '/',
      redirect: {name: '首页'},
      name: 'Blog-Vuetify',
      components: Vue.component( 'layout', require( './layouts/default/Layout' ) ),
      //beforeEnter:requireConfigs,
      children: [
        {
          path: 'index',
          name: '首页',
          components: Vue.component( 'index', require( './views/Index' ) ),
        },
      ]
    },
    {
      path: '*',
      name: '错误',
      components: Vue.component( 'error', require( './views/Error' ) )
    },

  ]
});
