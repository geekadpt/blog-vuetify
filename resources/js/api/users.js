
import { post,get,patch } from './axios'
import { APP_CONFIG } from '../config.js';

export default {
  /**
   * POST api/v1/captchas
   *
   */
  version: function (data) {
    return post(APP_CONFIG.API_URL+'api/v1/captchas',
      {
        phone : data.phone
      }
      )
  },
  getCaptchas: function (phone) {
    return post(APP_CONFIG.API_URL + 'captchas/',
      {
        phone: phone,
      }
    );
  },
  getVerificationCodes: function (captcha_key, captcha_code, phone) {
    return post(APP_CONFIG.API_URL + 'verificationCodes/',
      {
        captcha_key: captcha_key,
        captcha_code: captcha_code,
        phone: phone
      }
    );
  },
  postSignIn: function (verification_key, verification_code, name, password) {
    return post(APP_CONFIG.API_URL + 'users',
      {
        verification_key: verification_key,
        verification_code: verification_code,
        name: name,
        password: password,
      }
    );
  },
  postSignUp: function (username, password) {
    return post(APP_CONFIG.API_URL + 'authorizations',
      {
        username:username,
        password: password,
      }
    );
  },
  postSignInByOauth: function (code,social_type) {
    return post(APP_CONFIG.API_URL + 'socials/'+social_type+'/authorizations',
      {
        code:code,
      }
    );
  },
  getLoadUser: function () {
    return get(APP_CONFIG.API_URL + 'user',
    );
  },
  getLoadOther: function (data) {
    return get(APP_CONFIG.API_URL + 'other/'+data.other,
    );
  },
  patchUpdateUserProfile: function (data) {
    return patch(APP_CONFIG.API_URL + 'user', {
      name: data.name,
      email:data.email,
      introduction:data.introduction,
      avatar_image_id:data.avatar_image_id,
    });
  },
}
