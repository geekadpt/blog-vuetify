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
        description:'Blog-Vuetify是由 Larave8 + Vue2 + Vuetify2 开发的前后端分离的单页面博客类 Web 应用。',
        img_api:'https://unsplash.it/1600/900?random',
        img_lazy_api:'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        logs: [
          {
            from: '洛辛',
            message: '新增日志卡片部件',
            time: '5:42pm',
            color: 'blue lighten-1',
          },
          {
            from: '洛寻',
            message: '新增网站介绍卡片部件',
            time: '3:07pm',
            color: 'green',
          },
          {
            from: 'Locyin',
            message: '完成博客搜索功能',
            time: '9:47am',
            color: 'deep-purple lighten-1',
          },
        ],
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
          icon: 'mdi-post-outline',
          to: '/blog',
        },
        {
          title: '学院',
          icon: 'mdi-school-outline',
          to: '/edu',
        },
        {
          title: '下载',
          icon: 'mdi-download',
          to: '/download',
        },
        {
          title: '论坛',
          icon: 'mdi-forum',
          to: '/bbs',
        },
        {
          title: '直播',
          icon: 'mdi-cellphone',
          to: '/live',
        },
        {
          title: '电子书',
          icon: 'mdi-book',
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

    uploadImage:'',
    uploadImageStatus:0,
    uploadImageErrors:'',

    routerGuardStatus:false,

    overlayStatus:false,
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
    uploadImage( { commit },data ){
      commit("setUploadImageStatus",1);
      AppApi.uploadImages(data).then( function( response ){
        console.log(response);
        commit("setUploadImage",response.src);
        commit("setUploadImageStatus",2);
      }).catch( function(error){
        commit("setUploadImageStatus",3);
        commit("setUploadImageErrors",error.message);
      });
    },

    initUploadImageStatus( { commit }){
      commit("setUploadImage",'');
      commit("setInitUploadImageStatus",0);
    },

    openRouterGuard( { commit }){
      commit("setRouterGuardStatus",true);
    },
    closeRouterGuard( { commit }){
      commit("setRouterGuardStatus",false);
    },

    openOverlay( { commit }){
      commit("setOverlayStatus",true);
    },
    closeOverlay( { commit }){
      commit("setOverlayStatus",false);
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
    },

    setUploadImage(state,data){
      state.uploadImage = data;
    },
    setUploadImageStatus(state,status){
      state.uploadImageStatus = status;
    },
    setUploadImageErrors(state,error){
      state.uploadImageErrors = error;
    },
    setInitUploadImageStatus(state){
      state.articlesPublishStatus = 0;
    },
    setRouterGuardStatus(state,status){
      state.routerGuardStatus = status;
    },
    setOverlayStatus(state,status){
      state.overlayStatus = status;
    },

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
    },
    getUploadImage(state){
      return state.uploadImage;
    },
    getUploadImageStatus(state){
      return function () {
        return state.uploadImageStatus;
      }
    },
    getUploadImageErrors(state){
      return state.uploadImageErrors;
    },
    getRouterGuardStatus(state){
      return state.routerGuardStatus;
    },
    getOverlayStatus(state){
      return state.overlayStatus;
    },
  }
};
