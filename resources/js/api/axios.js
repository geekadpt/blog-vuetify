// 引入axios
import axios from 'axios';
import {APP_CONFIG} from "../config";
import i18n from  '../plugins/vue-i18n'
import store from '../store.js'
// 创建axios实例
const httpService = axios.create({
  // url前缀-'https://some-domain.com/api/'
  baseURL: APP_CONFIG.API_URL, // 需自定义
  // 请求超时时间
  timeout: 3000 // 需自定义
});

// request拦截器
httpService.interceptors.request.use(
  config => {
    // 根据条件加入token-安全携带
    //console.log(i18n.locale);
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    config.headers.AcceptLanguage = i18n.locale;
    return config;
  },
  error => {
    // 请求错误处理
    Promise.reject(error);
  }
)

// respone拦截器
httpService.interceptors.response.use(
  response => {
    // 统一处理状态
    const res = response.data;
    console.log(response.status);
    //获取响应头中的 authorization
    var token = response.headers.authorization;
    //如果存在 authorization 说明服务器端判定 token 过期了并返回了新的 token
    if (token) {
      //Vue 需要做的就是把新的token更新保存到cookie中，调用 Vuex users.js 模块中的 refreshToken 方法
      localStorage.setItem('Authorization', 'Bearer ' + res.access_token);
    }
    // if (response.status !== 200) { // 需自定义
    //   // 返回异常
    //   return Promise.reject({
    //     status: response.status,
    //     message: res.message
    //   });
    // } else {
    //   return res;
    // }
    return res;
  },
  // 处理处理
  error => {
    if(error.response.status === 401){
        store.dispatch('clearLoginStatus');
    }
    if(error && error.response && typeof error.response.data.errors === "undefined" && typeof error.response.data.message !== "undefined"){
      error.message = error.response.data.message;
      return Promise.reject(error);
    }else if(error && error.response && typeof error.response.data.errors !== "undefined" && typeof error.response.data.message !== "undefined"){
      error.message = error.response.data.errors[Object.keys(error.response.data.errors)[0]].toString();
      return Promise.reject(error);
    }
    else if(error && error.response && typeof error.response.data.errors === "undefined" && typeof error.response.data.message === "undefined") {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求';
          break;
        case 401:
          error.message = '未授权，请重新登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '请求错误,未找到该资源';
          break;
        case 405:
          error.message = '请求方法未允许';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        case 501:
          error.message = '网络未实现';
          break;
        case 502:
          error.message = '网络错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网络超时';
          break;
        case 505:
          error.message = 'http版本不支持该请求';
          break;
        default:
          error.message = `未知错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败";
    }
    return Promise.reject(error);
  }
)

/*网络请求部分*/

/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'get',
      params: params
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: params
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}

/*
 *  patch请求
 *  url:请求地址
 *  params:参数
 * */
export function patch(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'patch',
      data: params
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}
/*
 *  patch请求
 *  url:请求地址
 *  params:参数
 * */
export function put(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'put',
      data: params
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}
/*
 *  delete请求
 *  url:请求地址
 *  params:参数
 * */
export function del(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'delete',
      data: params
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}


/*
 *  文件上传
 *  url:请求地址
 *  params:参数
 * */
export function fileUpload(url, params = {}) {
  return new Promise((resolve, reject) => {
    httpService({
      url: url,
      method: 'post',
      data: params,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });
}

export default {
  get,
  post,
  put,
  patch,
  fileUpload
}
