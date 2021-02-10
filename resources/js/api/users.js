
import { post,get,patch ,put } from './axios'
import { APP_CONFIG } from '../config.js';

export default {
  /**
   * POST /api/v1/captchas
   */
  sendCaptchas: function(data){
    return post( APP_CONFIG.API_URL + 'captchas' , {
      phone:data.phone
    });
  },
  /**
   * POST /api/v1/verificationCodes
   */
  sendVerificationCodes: function(data){
    return post( APP_CONFIG.API_URL + 'verificationCodes' , {
      captcha_code:data.captcha_code,
      captcha_key:data.captcha_key,
    });
  },
  /**
   * POST /api/v1/users
   */
  register: function(data){
    return put( APP_CONFIG.API_URL + 'users' , {
      verification_key:data.verification_key,
      verification_code:data.verification_code,
      nickname:data.nickname,
      password:data.password
    });
  },
  /**
   * POST /api/v1/authorizations
   */
  login: function(data){
    return post( APP_CONFIG.API_URL + 'authorizations' , {
      username:data.username,
      password:data.password
    });
  },
  /**
   * POST /api/v1//socials/{social_type}/authorizations
   */
  oauth: function(data){
    return post( APP_CONFIG.API_URL + 'socials/'+data.social+'/authorizations' , {
      code:data.code,
    });
  },
  /**
   * POST /api/v1/user
   */
  getMyInfo: function(){
    return get( APP_CONFIG.API_URL + 'user');
  },
  /**
   * PATCH /api/v1/user
   */
  updateProfile: function(data){
    return patch( APP_CONFIG.API_URL + 'user' , {
      username:data.username,
      password:data.password,
      password_origin:data.password_origin,
      introduction: data.introduction
    });
  },
}
