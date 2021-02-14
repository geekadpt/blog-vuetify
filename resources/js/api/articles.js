/**
 * Imports the LvBlog API URL from the config.
 */
import { APP_CONFIG } from '../config.js';
import { post,get,patch ,put , del } from './axios'

export default {

    indexArticles: function(data){
        return get(APP_CONFIG.API_URL + 'articles'+'?page='+data.page+'&order='+data.order);
    },
    //草稿箱
    draftArticles: function(data){
      return post(APP_CONFIG.API_URL + 'articles/draft' );
    },
    //私有文章
    privateArticles: function(data){
      return post(APP_CONFIG.API_URL + 'articles/private');
    },
    //获取文章详情
    detailArticles: function(data){
      return post(APP_CONFIG.API_URL + 'articles',{
        id:data.id
      });
    },
    //发布文章
    publishArticles: function(data){
      return put(APP_CONFIG.API_URL + 'articles',{
        title:data.title,
        body:data.body,
        tags:data.tags,
        category:data.category,
        excerpt:data.excerpt,
        target:data.target,
      });
    },
    //更新文章
    patchArticles: function(data){
      return patch(APP_CONFIG.API_URL ,{
        id:data.id,
        title:data.title,
        body:data.body,
        tags:data.tags,
        category:data.category,
        excerpt:data.excerpt,
        target:data.target,
      });
    },
    //删除文章
    deleteArticles:  function(data){
      return del(APP_CONFIG.API_URL + 'articles',{
        id:data.id
      });
    },

    //查找我的文章
    searchArticles :function(data){
      return post(APP_CONFIG.API_URL + 'articles/search',{
        search:data.search,
      })
    },
    //根据分类获取文章
    categoryArticles: function(data){
      return get(APP_CONFIG.API_URL + 'categories/articles',{
        category:data.category
      });
    },
    //根据标签获取文章
    tagArticles: function(data){
      return get(APP_CONFIG.API_URL + 'tags/articles',{
        tag:data.tag
      });
    },
    patchArticleViewCount: function (data) {
      return patch(APP_CONFIG.API_URL + 'articles/view_count',{
          id:data.id,
      });
    },
}
