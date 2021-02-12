/*
|-------------------------------------------------------------------------------
| VUEX modules/users.js
|-------------------------------------------------------------------------------
| The Vuex data store for the Articles
*/

import ArticleAPI from '../api/articles';

/**
 status = 0 -> 数据尚未加载
 status = 1 -> 数据开始加载
 status = 2 -> 数据加载成功
 status = 3 -> 数据加载失败
 */

export const articles = {
    state: {
        //分类
        articles: '',
        articlesLoadStatus:0,

        essays: '',
        essaysLoadStatus:0,

        article: '',
        articleLoadStatus:0,

        articleAddStatus:0,
        articleAddErrors:'',

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
      loadArticles({commit,state},data ){
        commit('setArticlesLoadStatus',1);
        ArticleAPI.getArticles(data)
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
      loadEssays({commit,state},data ){
        commit('setEssaysLoadStatus',1);
        ArticleAPI.getArticles(data)
          .then(function (response) {
            if(state.essays !== undefined){
              var merge_essays = state.essays.concat(response);
              commit('setEssays',merge_essays);
            }
            commit('setEssays',response);
            commit('setEssaysLoadStatus', 2);
          })
          .catch(function (error){
            commit('setEssaysLoadStatus', 3);
          });
      },
        loadUserTagArticles({commit,state},data){
            commit('setArticleLoadStatus',1);
            ArticleAPI.getUserTagArticles(data.tag,data.page)
                .then(function (response) {
                    if(state.articles.data !== undefined){
                        var merge_data = state.articles.data.concat(response.data.data);
                        response.data.data = merge_data;
                    }
                    commit('setArticles',response.data);
                    commit('setArticlesLoadStatus', 2);
                })
                .catch(function (error){
                    commit('setArticleLoadStatus', 3);
            });
        },
        loadDraftArticles({commit,state},data){
            commit('setArticleLoadStatus',1);
            ArticleAPI.getDraftArticles(data)
                .then(function (response) {
                    if(state.articles.data !== undefined){
                        var merge_data = state.articles.data.concat(response.data.data);
                        response.data.data = merge_data;
                        commit('setArticles',response.data);
                    }
                    commit('setArticles',response.data);
                    commit('setArticlesLoadStatus', 2);
                })
                .catch(function (error){
                    commit('setArticleLoadStatus', 3);
                });
        },
        loadPrivateArticles({commit,state},data){
            commit('setArticleLoadStatus',1);
            ArticleAPI.getPrivateArticles(data)
                .then(function (response) {
                    if(state.articles.data !== undefined){
                        var merge_data = state.articles.data.concat(response.data.data);
                        response.data.data = merge_data;
                        commit('setArticles',response.data);
                    }
                    commit('setArticles',response.data);
                    commit('setArticlesLoadStatus', 2);
                })
                .catch(function (error){
                    commit('setArticleLoadStatus', 3);
                });
        },
        loadUserCategoryArticles({commit,state},data){
            commit('setArticleLoadStatus',1);
            ArticleAPI.getUserCategoryArticles(data)
                .then(function (response) {
                    if(state.articles.data != undefined){
                        let merge_data = state.articles.data.concat(response.data.data);
                        response.data.data = merge_data;
                    }
                    commit('setArticles',response.data);
                    commit('setArticlesLoadStatus', 2);
                })
                .catch(function (error){
                    commit('setArticleLoadStatus', 3);
            });
        },
        addArticle({commit,dispatch},data){
            commit('setArticleAddStatus', 1);
            ArticleAPI.postArticle(data.title,data.body,data.tags,data.category_id,data.excerpt,data.target)
                .then(function (response) {
                    commit('setArticleAddStatus', 2);
                })
                .catch(function (error){
                    commit('setArticleAddStatus', 3);
                    console.log(error.response.data.errors[Object.keys(error.response.data.errors)[0]].toString());
                    commit('setArticleAddResponseMessages', error.response.data.errors[Object.keys(error.response.data.errors)[0]].toString() === '' ? "发布失败，可能是因为登陆超时造成的." : error.response.data.errors[Object.keys(error.response.data.errors)[0]].toString());
                });
        },
        updateArticle({commit},data){
            commit('setArticleUpdateStatus', 1);
            ArticleAPI.patchArticle(data)
                .then(function (response) {
                    commit('setArticleUpdateStatus', 2);
                })
                .catch(function (error){
                    commit('setArticleUpdateStatus', 3);
                    console.log(error.response.data.errors[Object.keys(error.response.data.errors)[0]].toString());
                    commit('setArticleUpdateResponseMessages', error.response.data.errors[Object.keys(error.response.data.errors)[0]].toString() === '' ? "发布失败，可能是因为登陆超时造成的." : error.response.data.errors[Object.keys(error.response.data.errors)[0]].toString());
                });
        },
        deleteArticle({commit,dispatch},data){
            commit('setArticleDeleteStatus', 1);
            ArticleAPI.deleteArticle(data)
                .then(function (response) {
                    commit('setArticleDeleteStatus', 2);
                })
                .catch(function (error){
                    commit('setArticleDeleteStatus', 3);
                });
        },
        initArticleAddStatus({commit}){
            commit('setArticleAddStatus', 0);
            commit('setArticleAddResponseMessages', '');
        },
        initArticleUpdateStatus({commit}){
            commit('setArticleUpdateStatus', 0);
            commit('setArticleUpdateResponseMessages', '');
        },
        loadArticle({commit},data){
            commit('setArticleLoadStatus',1);
            ArticleAPI.getArticle(data.art_id)
                .then(function (response) {
                    commit('setArticle',response.data);
                    commit('setArticleLoadStatus', 2);
                })
                .catch(function (error){
                    commit('setArticleLoadStatus', 3);
                });
        },
        clearArticles({commit}){
            commit('setArticles','');
            commit('setArticlesLoadStatus', 0);
        },
        patchUpdateViewCount({commit},data){
            commit('setUpdateViewCountStatus',1);
            ArticleAPI.patchArticleViewCount(data)
                .then(function (response){
                    commit('setUpdateViewCountStatus',2);
                })
                .catch(function(error){
                    commit('setUpdateViewCountStatus',3);
                });
        },
        getRecommendArticles({commit}){
            commit('setRecommendArticlesLoadStatus',1);
            ArticleAPI.getRecommendArticles()
                .then(function (response) {
                    commit('setRecommendArticles',response.data);
                    commit('setRecommendArticlesLoadStatus',2);
                })
                .catch(function (error) {
                    commit('setRecommendArticlesLoadStatus',3);
                })
        },
        searchArticles({commit,state},data){
            commit('setArticlesSearchStatus',1);
            ArticleAPI.searchArticles(data)
                .then(function (response) {
                    if(state.articles.data !== undefined){
                        var merge_data = state.articles.data.concat(response.data.data);
                        response.data.data = merge_data;
                        commit('setArticles',response.data);
                    }
                    commit('setArticles',response.data);
                    commit('setArticlesSearchStatus',2);
                    })
                .catch(function (error){
                    commit('setArticlesSearchStatus', 3);
                });
            }
        },
    mutations:{
        setArticlesLoadStatus(state,status){
            state.articlesLoadStatus = status;
        },
        setArticles(state,data){
            state.articles = data;
        },

        setEssaysLoadStatus(state,status){
          state.essaysLoadStatus = status;
        },
        setEssays(state,data){
          state.essays= data;
        },

        setArticleLoadStatus(state,status){
            state.articleLoadStatus = status;
        },
        setArticle(state,article){
            state.article = article;
        },
        setArticleAddStatus(state,status){
            state.articleAddStatus = status;
        },
        setArticleAddResponseMessages(state,messages){
            state.articlesAddResponseMessages = messages;
        },
        setArticleUpdateStatus(state,status){
            state.articleUpdateStatus = status;
        },
        setArticleDeleteStatus(state,status){
            state.articleDeleteStatus = status;
        },
        setArticleUpdateResponseMessages(state,messages){
            state.articlesUpdateResponseMessages = messages;
        },
        setUpdateViewCountStatus(state,status){
            state.updateViewCountStatus = status;
        },
        setRecommendArticles(state,articles){
            state.recommendArticles = articles;
        },
        setRecommendArticlesLoadStatus(state,status){
            state.recommendArticlesLoadStatus = status;
        },
        setArticlesSearchStatus(state,status){
            state.articleSearchStatus = status;
        }

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
        getArticle(state){
            return state.article;
        },
        getArticleLoadStatus(state){
            return function(){
                return state.articleLoadStatus;
            }
        },
        getArticleAddStatus(state){
            return function() {
                return state.articleAddStatus;
            }
        },
        getArticleAddResponseMessages(state){
            return function() {
                return state.articlesAddResponseMessages;
            }
        } ,
        getArticleUpdateStatus(state){
            return function() {
                return state.articleUpdateStatus;
            }
        },
        getArticleDeleteStatus(state){
            return function(){
                return state.articleDeleteStatus;
            }
        },
        getArticleUpdateResponseMessages(state){
            return function() {
                return state.articlesUpdateResponseMessages;
            }
        },
        getUpdateViewCountStatus(state){
            return state.updateViewCountStatus = status;
        },
        getRecommendArticles(state){
            return state.recommendArticles;
        },
        getRecommendArticlesLoadStatus(state){
            return function () {
                return state.recommendArticlesLoadStatus;
            };
        },
        getArticlesSearchStatus(state){
            return function () {
                return state.articleSearchStatus;
            }
        }
    }
};
