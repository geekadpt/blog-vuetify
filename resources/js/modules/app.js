/*
 |-------------------------------------------------------------------------------
 | VUEX modules/app.js|-------------------------------------------------------------------------------
 | The Vuex data store for the users
 */

import AppApi from '../api/app';
export const app = {
  /**
   * Defines the state being monitored for the module.
   */
  state: {
    app:{
        title:'Blog-Vuetify',
    },
    appStatus:0,
    version:null,
    versionStatus:0,
    //导航抽屉
    drawer:{
      drawer: null,
      drawerImage: true,
      mini: false,
      items: [
        {
          title: '首页',
          icon: 'mdi-view-dashboard',
          to: '/index',
        },
        {
          title: '博客',
          icon: 'mdi-account',
          to: '/blog',
        },
        {
          title: '学院',
          icon: 'mdi-clipboard-outline',
          to: '/edu',
        },
        {
          title: '下载',
          icon: 'mdi-format-font',
          to: '/download',
        },
        {
          title: '论坛',
          icon: 'mdi-chart-bubble',
          to: '/bbs',
        },
        {
          title: '直播',
          icon: 'mdi-map-marker',
          to: '/live',
        },
        {
          title: '电子书',
          icon: 'mdi-bell',
          to: '/book',
        },
      ],
    },
    drawerStatus:0,
    personalStatus:0,
    personal:{
      dark: false,
      gradients:
        'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
      images:
        'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-3.jpg',
      notifications: [],
      rtl: false,
    },
    beforeLoginRoute:null,
  },

  /**
   * Defines the actions used to retrieve the data.
   */
  actions: {
    version( { commit },data ){
      commit("setVersionStatus",1);
      AppApi.version(data).then( function( response ){
          console.log(response);
          commit("setVersion",response);
          commit("setVersionStatus",2);
      }).catch( function(error){
          commit("setVersionStatus",3);
          console.log(error);
      });
    },
    drawer( { commit },data ){
      commit("setDrawerStatus",1);
      AppApi.version(data).then( function( response ){
        console.log(response);
        commit("setDrawer",response);
        commit("setDrawerStatus",2);
      }).catch( function(error){
        commit("setDrawerStatus",3);
        console.log(error);
      });
    },
    personal( { commit },data ){
      commit("setPersonalStatus",1);
      AppApi.version(data).then( function( response ){
        console.log(response);
        commit("setPersonal",response);
        commit("setPersonalStatus",2);
      }).catch( function(error){
        commit("setPersonalStatus",3);
        console.log(error);
      });
    },
    mini( { commit }){
        commit("setMini");
    },
    app( { commit },data ){
      commit("setAppStatus",1);
      AppApi.version(data).then( function( response ){
        console.log(response);
        commit("setApp",response);
        commit("setAppStatus",2);
      }).catch( function(error){
        commit("setAppStatus",3);
        console.log(error);
      });
    },
    beforeLoginRoute( { commit },data ){
      commit("setBeforeLoginRoute",data.path);
    },

  },
  /**
   * Defines the mutations used
   */
  mutations: {
    setVersion( state, data ){
      state.version = data;
    },
    setVersionStatus( state, status ){
      state.versionStatus = status;
    },
    setDrawer( state, data ){
      state.version = data;
    },
    setDrawerStatus( state, status ){
      state.versionStatus = status;
    },
    setPersonal( state, data ){
      state.version = data;
    },
    setPersonalStatus( state, status ){
      state.versionStatus = status;
    },
    setApp( state, data ){
      state.app = data;
    },
    setAppStatus( state, status ){
      state.appStatus = status;
    },
    setMini( state ){
      state.drawer.mini = !state.drawer.mini;
    },
    setBeforeLoginRoute(state , data){
      state.beforeLoginRoute = data;
    }
  },
  /**
   * Defines the getters used by the module
   */
  getters: {
    getVersion( state ){
      return state.version;
    },
    getVersionStatus( state ){
      return function() {
        return state.versionStatus;
      }
    },
    getDrawer( state ){
      return state.drawer;
    },
    getDrawerStatus( state ){
      return function() {
        return state.drawerStatus;
      }
    },
    getPersonal( state ){
      return state.personal;
    },
    getPersonalStatus( state ){
      return function() {
        return state.personalStatus;
      }
    },
    getApp( state ){
      return state.app;
    },
    getAppStatus( state ){
      return function() {
        return state.appStatus;
      }
    },
    getBeforeLoginRoute(state){
      return state.beforeLoginRoute;
    }
  }
};
