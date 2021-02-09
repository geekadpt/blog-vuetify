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
    version:null,
    versionStatus:0
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
  }
};
