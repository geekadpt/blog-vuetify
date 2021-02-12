/*
|-------------------------------------------------------------------------------
| VUEX modules/users.js
|-------------------------------------------------------------------------------
| The Vuex data store for the Articles
*/

import ArticlesAPI from "../api/articles";

/**
 status = 0 -> 数据尚未加载
 status = 1 -> 数据开始加载
 status = 2 -> 数据加载成功
 status = 3 -> 数据加载失败
 */

export const articles = {
    state: {
        articles: '',
        articlesLoadStatus:0,

        articlesPublishStatus:0,
        articlesPublishErrors:'',

        article: '',
        articleLoadStatus:0,

        articleUpdateStatus:0,
        articleUpdateErrors:'',

        articleDeleteStatus:0,
        articleDeleteErrors:'',

        updateViewCountStatus:0,
        updateViewCountErrors:'',

        recommendArticles:{
            id:'',
            article_id:'',
            article_title:'',
            article_description:'',
            article_thumb:'',
        },
        recommendArticlesLoadStatus:0,

        articleSearchStatus:0,
        articleSearchErrors:'',
    },
    actions:{
      indexArticles({commit,state},data ){
        commit('setArticlesLoadStatus',1);
        ArticlesAPI.indexArticles(data)
          .then(function (response) {
            commit('setArticlesLoadStatus', 2);
            //console.log(state.articles);
            if(state.articles){
              const original_articles = state.articles;
              console.log(original_articles.data);
              console.log(response.data);
              // for(var i = original_articles.data.length-1; i>=0 ; i--){
              //   response.data.unshift(original_articles.data[i]);
              // }
              for(var i = 0; i < response.data.length ; i++){
                original_articles.data.push(response.data[i]);
              }
              original_articles.meta = response.meta;
              original_articles.links = response.links;
              //merge_articles.data.concat(response.data);
              console.log(response.data);
              commit('setArticles',original_articles);
            }else{
              commit('setArticles',response);
            }
          })
          .catch(function (error){
            commit('setArticlesLoadStatus', 3);
          });
      },
      publishArticles({commit},data){
        commit('setArticlesPublishStatus', 1);
        ArticlesAPI.publishArticles(data)
          .then(function (response) {
            commit('setArticlesPublishStatus', 2);
          })
          .catch(function (error){
            commit('setArticlesPublishStatus', 3);
            console.log(error.message);
            commit('setArticlesPublishErrors', error.message);
          });
      },
      initArticlesPublishStatus({commit}){
        commit('setInitArticlesPublishStatus');
      },
      loadArticle({commit},data){
        commit('setArticleLoadStatus',1);
        ArticlesAPI.detailArticles(data)
          .then(function (response) {
            commit('setArticle',response);
            commit('setArticleLoadStatus', 2);
          })
          .catch(function (error){
            commit('setArticleLoadStatus', 3);
          });
      },
    },
    mutations:{
        setArticlesLoadStatus(state,status){
            state.articlesLoadStatus = status;
        },
        setArticles(state,data){
            state.articles = data;
        },
        setArticlesPublishStatus(state,status){
          state.articlesPublishStatus = status;
        },
        setArticlesPublishErrors(state,error){
          state.articlesPublishErrors = error;
        },
        setInitArticlesPublishStatus(state){
          state.articlesPublishStatus = 0;
        },
        setArticleLoadStatus(state,status){
          state.articleLoadStatus = status;
        },
        setArticle(state,article){
          state.article = article;
        },
    },
    getters:{
        getArticles(state){
            return state.articles;
        },
        getArticlesLoadStatus(state){
            return function(){
                return state.articlesLoadStatus;
            }
        },
        getArticlesPublishStatus(state){
          return function(){
            return state.articlesPublishStatus;
          }
        },
        getArticlesPublishErrors(state){
          return state.articlesPublishErrors;
        },
        getArticle(state){
          return state.article;
        },
        getArticleLoadStatus(state){
          return function(){
            return state.articleLoadStatus;
          }
        },
    }
};
