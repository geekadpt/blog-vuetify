/*
|-------------------------------------------------------------------------------
| VUEX modules/tags.js
|-------------------------------------------------------------------------------
| The Vuex data store for the Tags
*/

import TagsAPI from "../api/tags";

/**
 status = 0 -> 数据尚未加载
 status = 1 -> 数据开始加载
 status = 2 -> 数据加载成功
 status = 3 -> 数据加载失败
 */

export const tags = {
    state: {
        tags: '',
        tagsLoadStatus:0,

        tagsPublishStatus:0,
        tagsPublishErrors:'',

        category: '',
        categoryLoadStatus:0,

        categoryUpdateStatus:0,
        categoryUpdateErrors:'',

        categoryDeleteStatus:0,
        categoryDeleteErrors:'',

        categorySearchStatus:0,
        categorySearchErrors:'',
    },
    actions:{
      indexTags({commit,state},data ){
        commit('setTagsLoadStatus',1);
        TagsAPI.indexTags(data)
          .then(function (response) {
            commit('setTagsLoadStatus', 2);
            commit('setTags',response);
          })
          .catch(function (error){
            commit('setTagsLoadStatus', 3);
          });
      },
      publishTags({commit},data){
        commit('setTagsPublishStatus', 1);
        TagsAPI.publishTags(data)
          .then(function (response) {
            commit('setTagsPublishStatus', 2);
          })
          .catch(function (error){
            commit('setTagsPublishStatus', 3);
            console.log(error.message);
            commit('setTagsPublishErrors', error.message);
          });
      },
      initTagsStatus({commit}){
        commit('setInitTagsStatus');
      },
    },
    mutations:{
        setTagsLoadStatus(state,status){
            state.tagsLoadStatus = status;
        },
        setTags(state,data){
            state.tags = data;
        },
        setTagsPublishStatus(state,status){
          state.tagsPublishStatus = status;
        },
        setTagsPublishErrors(state,error){
          state.tagsPublishErrors = error;
        },
        setInitTagsPublishStatus(state){
          state.tagsPublishStatus = 0;
        },
        setInitTagsStatus(state){
          state.tags = '';
          state.tagsLoadStatus = 0;
        },
    },
    getters:{
        getTags(state){
            return state.tags;
        },
        getTagsLoadStatus(state){
            return function(){
                return state.tagsLoadStatus;
            }
        },
        getTagsPublishStatus(state){
          return function(){
            return state.tagsPublishStatus;
          }
        },
        getTagsPublishErrors(state){
          return state.tagsPublishErrors;
        },
    }
};
