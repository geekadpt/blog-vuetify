
/*
 |-------------------------------------------------------------------------------
 | routes.js
 |-------------------------------------------------------------------------------
 | Contains all of the routes for the application
 */
import store from './store.js';

function requireAuth(to, from, next) {

  function proceed() {
    // 如果用户信息已经加载并且不为空则说明该用户已登录，可以继续访问路由，否则跳转到首页
    // 这个功能类似 Laravel 中的 auth 中间件
    if (store.getters.getMyInfoStatus() === 2 && store.getters.getMyInfo  !== '') {
      //console.log(from);
      next();
    } else {
      store.dispatch('beforeLoginRoute',{
          path:from.path
      })
      //console.log(from);
      next('/login');
    }
  }
  let token = localStorage.getItem('Authorization');

  if (token === 'null' || token === '') {
    proceed()
  }else {
    if(store.getters.getMyInfoStatus() === 0){
      store.dispatch('getMyInfo');
      // 监听用户信息加载状态，加载完成后调用 proceed 方法继续后续操作
      store.watch(store.getters.getMyInfoStatus, function () {
        if(store.getters.getMyInfoStatus() !== 1){
          proceed();
        }
      });
    }else{
      proceed();
    }
  }
}
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
          components: Vue.component( 'index', require( './views/Blog' ) ),
        },
        {
          path: 'blog',
          name: '博客',
          components: Vue.component( 'index', require( './views/Blog' ) ),
        },
        {
          path: 'tags/:tag_id/blog',
          name: '标签下的博客',
          components: Vue.component( 'tags_blog', require( './views/Blog' ) ),
        },
        {
          path: 'categories/:category_id/blog',
          name: '分类下的博客',
          components: Vue.component( 'categories_blog', require( './views/Blog' ) ),
        },
        {
          path: 'blog/search/:blog_search',
          name: '搜索博客',
          components: Vue.component( 'blog.search', require( './views/Blog' ) ),
        },
        {
          path: 'detail/:id',
          name: '文章详情',
          components: Vue.component( 'detail', require( './views/Detail' ) ),
        },
        {
          path: 'publish',
          name: '发布文章',
          components: Vue.component( 'publish', require( './views/Publish' ) ),
          beforeEnter: requireAuth,
        },
        {
          path: 'profile',
          name: '个人资料',
          components: Vue.component( 'profile', require( './views/Profile' ) ),
          beforeEnter: requireAuth,
        },
        {
          path: 'console',
          name: '控制台',
          components: Vue.component( 'console', require( './views/Console' ) ),
          beforeEnter: requireAuth,
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
