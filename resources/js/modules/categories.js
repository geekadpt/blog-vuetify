/*
|-------------------------------------------------------------------------------
| VUEX modules/categories.js
|-------------------------------------------------------------------------------
| The Vuex data store for the Categories
*/

import CategoriesAPI from "../api/categories";

/**
 status = 0 -> 数据尚未加载
 status = 1 -> 数据开始加载
 status = 2 -> 数据加载成功
 status = 3 -> 数据加载失败
 */

export const categories = {
    state: {
        categories: '',
        categoriesLoadStatus:0,

        categoriesPublishStatus:0,
        categoriesPublishErrors:'',

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
      indexCategories({commit,state},data ){
        commit('setCategoriesLoadStatus',1);
        CategoriesAPI.indexCategories(data)
          .then(function (response) {
            commit('setCategoriesLoadStatus', 2);
            commit('setCategories',response);
          })
          .catch(function (error){
            commit('setCategoriesLoadStatus', 3);
          });
      },
      publishCategories({commit},data){
        commit('setCategoriesPublishStatus', 1);
        CategoriesAPI.publishCategories(data)
          .then(function (response) {
            commit('setCategoriesPublishStatus', 2);
          })
          .catch(function (error){
            commit('setCategoriesPublishStatus', 3);
            console.log(error.message);
            commit('setCategoriesPublishErrors', error.message);
          });
      },
      initCategoriesStatus({commit}){
        commit('setInitCategoriesStatus');
      },
    },
    mutations:{
        setCategoriesLoadStatus(state,status){
            state.categoriesLoadStatus = status;
        },
        setCategories(state,data){
            state.categories = data;
        },
        setCategoriesPublishStatus(state,status){
          state.categoriesPublishStatus = status;
        },
        setCategoriesPublishErrors(state,error){
          state.categoriesPublishErrors = error;
        },
        setInitCategoriesPublishStatus(state){
          state.categoriesPublishStatus = 0;
        },
        setInitCategoriesStatus(state){
          state.categories = '';
          state.categoriesLoadStatus = 0;
        },
    },
    getters:{
        getCategories(state){
            return state.categories;
        },
        getCategoriesLoadStatus(state){
            return function(){
                return state.categoriesLoadStatus;
            }
        },
        getCategoriesPublishStatus(state){
          return function(){
            return state.categoriesPublishStatus;
          }
        },
        getCategoriesPublishErrors(state){
          return state.categoriesPublishErrors;
        },
    }
};
