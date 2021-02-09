
import { post } from './axios'
import { APP_CONFIG } from '../config.js';

export default {
  /**
   * POST /api/v1/version
   * 服务器接口返回 'V' + data.version
   */
  version: function (data) {
    return post(APP_CONFIG.API_URL+'version', {
        version : data.version
    });
  },
}
