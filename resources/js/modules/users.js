/*
 |-------------------------------------------------------------------------------
 | VUEX modules/users.js
 |-------------------------------------------------------------------------------
 | The Vuex data store for the users
 */

import UserApi from '../api/users';

export const users = {
  /**
   * Defines the state being monitored for the module.
   */
  state: {
    captcha:'',
    captchasSendStatus: 0,
    captchaKey:'',
    captchasSendErrors:'',
    verificationCodesSendStatus: 0,
    verificationKey:'',
    verificationCodesSendErrors:'',
    registerStatus: 0,
    registerErrors: '',
    loginStatus: 0,
    loginErrors: '',
    oauthStatus:'',
    oauthErrors:'',
    getMyInfoStatus: 0,
    myInfo:'',
    updateMyInfoStatus:0,
    updateMyInfoErrors: '',
    logoutStatus: 0,
    logoutErrors: '',

  },

  /**
   * Defines the actions used to retrieve the data.
   */
  actions: {
    sendCaptchas( { commit },data ){
      commit( 'setCaptchasSendStatus', 1 );
      UserApi.sendCaptchas(data)
        .then( function( response ){
          console.log(response);
          commit( 'setCaptchasSendStatus', 2 );
          commit( 'setCaptcha' ,response.captcha_image_content);
          commit( 'setCaptchaKey' ,response.captcha_key);
        })
        .catch( function(error){
          console.log(error.message);
          commit( 'setCaptchasSendStatus', 3 );
          commit( 'setCaptchasSendErrors',error.message);
        });
    },
    sendVerificationCodes( { commit },data ){
      commit( 'setSendVerificationCodesStatus', 1 );

      UserApi.sendVerificationCodes(data)
        .then( function( response ){
          console.log(response);
          commit( 'setSendVerificationCodesStatus', 2 );
          commit( 'setVerificationKey' ,response.key);
        })
        .catch( function(error){
          console.log(error.message);
          commit( 'setSendVerificationCodesStatus', 3 );
          commit( 'setVerificationCodesSendErrors',error.message);
        });
    },
    register( { commit },data ){
      commit( 'setRegisterStatus', 1 );

      UserApi.register(data)
        .then( function( response ){
          commit( 'setRegisterStatus', 2 );
        })
        .catch( function(error){
          commit( 'setRegisterStatus', 3 );
          commit( 'setVerificationCodesSendErrors',error.message);
        });
    },
    login( { commit },data ){
      commit( 'setLoginStatus', 1 );
      UserApi.login(data)
        .then( function( response ){
          localStorage.setItem('Authorization', 'Bearer ' + response.access_token);
          commit( 'setLoginStatus', 2 );
        })
        .catch( function(error){
          commit( 'setLoginStatus', 3 );
          commit( 'setLoginErrors',error.message);
        });
    },
    oauth( { commit , dispatch },data ){
      commit( 'setOauthStatus', 1 );

      UserApi.oauth(data)
        .then( function( response ){
          dispatch('getMyInfo');
          commit( 'setLoginStatus', 2 );
          commit( 'setOauthStatus', 2 );
        })
        .catch( function(error){
          commit( 'setOauthStatus', 3 );
          commit( 'setLoginStatus', 3 );
          commit( 'setVerificationCodesSendErrors',error.message);
        });
    },
    getMyInfo( { commit }){
      commit( 'setGetMyInfoStatus', 1 );

      UserApi.getMyInfo()
        .then( function( response ){
          commit( 'setLoginStatus', 2 );
          commit( 'setGetMyInfoStatus', 2 );
          //console.log(response.data);
          commit('setMyInfo',response);
        })
        .catch( function(error){
          commit( 'setLoginStatus', 3 );
          localStorage.removeItem('Authorization');
          commit('setMyInfo','');
          commit( 'setGetMyInfoStatus', 3 );
        });
    },
    updateMyInfo( { commit },data){
      commit( 'setUpdateMyInfoStatus', 1 );

      UserApi.updateProfile(data)
        .then( function( response ){
          commit( 'setUpdateMyInfoStatus', 2 );
        })
        .catch( function(error){
          commit( 'setUpdateMyInfoStatus', 3 );
          commit( 'setVerificationCodesSendErrors',error.message);
        });
    },
    logout( { commit }){
      commit( 'setLogoutStatus', 1 );
      UserApi.logout()
        .then( function( response ){
          commit( 'setLogoutStatus', 2 );
        })
        .catch( function(error){
          commit( 'setLogoutStatus', 3 );
          commit( 'setLogoutErrors',error.message);
        });
    },
    clearLoginStatus({commit}){
      localStorage.removeItem('Authorization');
      commit( 'setLoginStatus', 0 );
      commit('setMyInfo','');
    }
  },
  /**
   * Defines the mutations used
   */
  mutations: {
    setCaptchasSendStatus( state, status ){
      state.captchasSendStatus = status;
    },
    setCaptchaKey( state, data){
      state.captchaKey = data;
    },
    setCaptcha( state, data){
      state.captcha = data;
    },
    setCaptchasSendErrors( state, error){
      state.captchasSendErrors = error;
    },
    setSendVerificationCodesStatus( state, status ){
      state.verificationCodesSendStatus = status;
    },
    setVerificationKey( state, data){
      state.verificationKey = data;
    },
    setVerificationCodesSendErrors( state, error){
      state.verificationCodesSendErrors = error;
    },
    setRegisterStatus( state, status){
      state.registerStatus = status;
    },
    setRegisterErrors( state, errors){
      state.registerErrors = errors;
    },
    setLoginStatus( state, status){
      state.loginStatus = status;
    },
    setLoginErrors( state, errors){
      state.loginErrors = errors;
    },
    setOauthStatus( state, status){
      state.loginStatus = status;
    },
    setOauthErrors( state, errors){
      state.loginErrors = errors;
    },
    setGetMyInfoStatus( state, status){
      state.getMyInfoStatus = status;
    },
    setMyInfo( state, myInfo){
      state.myInfo = myInfo;
    },
    setUpdateMyInfoStatus( state, status){
      state.updateMyInfoStatus = status;
    },
    setUpdateMyInfoErrors( state, errors){
      state.updateMyInfoErrors = errors;
    },
    setLogoutStatus( state, status){
      state.logoutStatus = status;
    },
    setLogoutErrors( state, errors){
      state.logoutErrors = errors;
    },

  },
  /**
   * Defines the getters used by the module
   */
  getters: {
    getCaptchasSendStatus( state ){
      return function(){
        return state.captchasSendStatus;
      }
    },
    getCaptchaKey( state ){
      return state.captchaKey;
    },
    getCaptcha( state ){
      return state.captcha;
    },
    getCaptchasSendErrors( state){
      return state.captchasSendErrors;
    },

    getVerificationCodesSendStatus( state ){
      return function(){
        return state.verificationCodesSendStatus;
      }

    },
    getVerificationKey( state ){
      return state.verificationKey;
    },
    getVerificationCodesSendErrors( state){
      return state.verificationCodesSendErrors;
    },
    getRegisterStatus( state ){
      return function () {
        return state.registerStatus;
      }
    },
    getRegisterErrors( state ){
      return state.registerErrors;
    },
    getLoginStatus( state ){
      return function () {
        return state.loginStatus ;
      }
    },
    getLoginErrors( state ){
      return state.loginErrors;
    },
    getOauthStatus( state ){
      return function () {
        return state.loginStatus ;
      }
    },
    getOauthErrors( state ){
      return state.loginErrors;
    },
    getMyInfoStatus( state){
      return function () {
        return state.getMyInfoStatus;
      }
    },
    getMyInfo( state){
      return state.myInfo;
    },
    getUpdateMyInfoStatus( state){
      return function(){
        return state.updateMyInfoStatus;
      }
    },
    getUpdateMyInfoErrors( state){
      return state.updateMyInfoErrors ;
    },
    getLogoutStatus( state ){
      return function () {
        return state.logoutStatus ;
      }
    },
    getLogoutErrors( state ){
      return state.logoutErrors;
    },
  }
};
